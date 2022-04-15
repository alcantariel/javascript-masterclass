class DatabaseError {
  constructor(statement, message) {
    this.statement = statement;
    this.message = message;
  }
}

class Parser {
  constructor() {
    this.commands = new Map();
    this.commands.set("createTable", /create table ([a-z]+) \((.+)\)/);
    this.commands.set(
      "insert",
      /insert into ([a-z]+) \((.+)\) values \((.+)\)/
    );
    this.commands.set("select", /select (.+) from ([a-z]+)(?: where (.+))?/);
    this.commands.set("delete", /delete from ([a-z]+)(?: where (.+))?/);
  }

  parse(statement) {
    for (let [command, regexp] of this.commands) {
      const parsedStatement = statement.match(regexp);

      if (parsedStatement) {
        return {
          command,
          parsedStatement,
        };
      }
    }
  }
}

class Database {
  constructor() {
    this.tables = {};
    this.parser = new Parser();
  }

  execute(statement) {
    const result = this.parser.parse(statement);

    if (result) {
      return this[result.command](result.parsedStatement);
    }

    throw new DatabaseError(statement, `Syntax Error: "${statement}"`);
  }

  createTable(parsedStatement) {
    let [, tableName, columns] = parsedStatement;
    columns = columns.split(",").map((column) => column.trim().split(" "));

    this.tables[tableName] = {
      columns: {},
      data: [],
    };

    for (const column of columns) {
      const [columnName, type] = column;
      this.tables[tableName].columns[columnName] = type;
    }
  }

  insert(parsedStatement) {
    let [, tableName, columns, values] = parsedStatement;
    columns = columns.split(",").map((column) => column.trim());
    values = values.split(",").map((value) => value.trim());

    if (columns.length !== values.length) {
      throw new DatabaseError(statement, `Syntax Error: "${statement}"`);
    }

    const row = columns.reduce((row, column, index) => {
      row[column] = values[index];
      return row;
    }, {});

    this.tables[tableName].data.push(row);
  }

  select(parsedStatement) {
    let [, columns, tableName, whereClause = ""] = parsedStatement;
    columns = columns.split(",").map((column) => column.trim());

    const [columnWhere, valueWhere] = whereClause
      .split("=")
      .map((clause) => clause.trim());

    const selectedRows = this.tables[tableName].data
      .filter((data) => data[columnWhere] === valueWhere)
      .map((data) => {
        return columns.reduce((selectedRow, column) => {
          selectedRow[column] = data[column];
          return selectedRow;
        }, {});
      });

    return selectedRows;
  }

  delete(parsedStatement) {
    let [, tableName, whereClause = ""] = parsedStatement;

    if (whereClause) {
      const [columnWhere, valueWhere] = whereClause
        .split("=")
        .map((clause) => clause.trim());

      this.tables[tableName].data = this.tables[tableName].data.filter(
        (data) => data[columnWhere] !== valueWhere
      );
    } else {
      this.tables[tableName].data = [];
    }
  }
}

try {
  const database = new Database();
  database.execute(
    "create table author (id number, name string, age number, city string, state string, country string)"
  );
  database.execute(
    "insert into author (id, name, age) values (1, Douglas Crockford, 62)"
  );
  database.execute(
    "insert into author (id, name, age) values (2, Linus Torvalds, 47)"
  );
  database.execute(
    "insert into author (id, name, age) values (3, Martin Fowler, 54)"
  );
  database.execute("delete from author where id = 2");
  console.log(database.execute("select name, age from author"));
  // console.log(JSON.stringify(database, null, "  "));
} catch (error) {
  console.log(error);
}
