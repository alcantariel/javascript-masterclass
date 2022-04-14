function DatabaseError(statement, message) {
  this.statement = statement;
  this.message = message;
}

const database = {
  execute(statement) {
    if (statement.startsWith("create table")) {
      return this.createTable(statement);
    } else if (statement.startsWith("insert into")) {
      return this.insert(statement);
    }

    throw new DatabaseError(statement, `Syntax Error: "${statement}"`);
  },
  createTable(statement) {
    const regexp = /create table ([a-z]+) \((.+)\)/;
    let [, tableName, columns] = statement.match(regexp);

    columns = columns.split(",").map((column) => column.trim().split(" "));

    this.tables[tableName] = {
      columns: {},
      data: [],
    };

    for (const column of columns) {
      const [columnName, type] = column;
      this.tables[tableName].columns[columnName] = type;
    }
  },
  insert(statement) {
    const regexp = /insert into ([a-z]+) \((.+)\) values \((.+)\)/;
    let [, tableName, columns, values] = statement.match(regexp);

    columns = columns.split(",").map((column) => column.trim());
    values = values.split(",").map((value) => value.trim());

    const row = columns.reduce((row, column, index) => {
      row[column] = values[index];
      return row;
    }, {});

    this.tables[tableName].data.push(row);
  },
  tables: {},
};

try {
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

  console.log(JSON.stringify(database, null, "  "));
} catch (e) {
  console.log(e);
}
