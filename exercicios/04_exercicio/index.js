function DatabaseError(statement, message) {
  this.statement = statement;
  this.message = message;
}

const database = {
  execute(statement) {
    if (statement.startsWith("create table")) {
      return this.createTable(statement);
    }

    throw new DatabaseError(statement, `Syntax Error: "${statement}"`);
  },
  createTable(statement) {
    const regexp = /create table ([a-z]+) \((.+)\)/;
    const parsedStatement = statement.match(regexp);
    const tableName = parsedStatement[1];
    const columns = parsedStatement[2].split(",");

    this.tables[tableName] = {
      columns: {},
      data: [],
    };

    for (const column of columns) {
      const parsedColumn = column.trim().split(" ");
      const columnName = parsedColumn[0];
      const type = parsedColumn[1];

      this.tables[tableName].columns[columnName] = type;
    }
  },
  tables: {},
};

const createTableStatement =
  "create table author (id number, name string, age number, city string, state string, country string)";

try {
  database.execute(createTableStatement);
  database.execute("select id, name from author");
  console.log(JSON.stringify(database, null, "  "));
} catch (e) {
  console.log(e);
  // DatabaseError {
  //   statement: 'select id, name from author',
  //   message: 'Syntax Error: "select id, name from author"'
  // }
}
