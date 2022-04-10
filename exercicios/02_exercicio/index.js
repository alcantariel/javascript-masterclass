const statement =
  "create table author (id number, name string, age number, city string, state string, country string)";

const regexp = /create table ([a-z]+) \((.+)\)/;

const parsedStatement = statement.match(regexp);

const tableName = parsedStatement[1];
const columns = parsedStatement[2].split(",");

const database = {
  tables: {
    [tableName]: {
      columns: {},
      data: [],
    },
  },
};

for (const column of columns) {
  const parsedColumn = column.trim().split(" ");
  const columnName = parsedColumn[0];
  const type = parsedColumn[1];

  database.tables[tableName].columns[columnName] = type;
}

console.log(JSON.stringify(database, null, "  "));
