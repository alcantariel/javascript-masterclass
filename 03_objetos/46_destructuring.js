// array destructuring - valor padrão

const languagesCsv = "C;Dennis Ritchie";

const [name = "-", author = "-", year = "-"] = languagesCsv.split(";");
console.log(name, author, year); // C Dennis Ritchie
