// array destructuring

const languagesCsv = "C;Dennis Ritchie; 1972";

const [name, author, year] = languagesCsv.split(";");
console.log(name, author, year); // C Dennis Ritchie 1972

const [, author2, year2] = languagesCsv.split(";");
console.log(author2, year2); // Dennis Ritchie 1972

const [name3, , year3] = languagesCsv.split(";");
console.log(name3, year3); // C 1972

const [name4, author4] = languagesCsv.split(";");
console.log(name4, author4); // C Dennis Ritchie
