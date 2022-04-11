const database = {
  execute(statement) {
    if (statement.startsWith("create table")) {
      return this.createTable(statement);
    }
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

database.execute(createTableStatement);

console.log(JSON.stringify(database, null, "  "));
