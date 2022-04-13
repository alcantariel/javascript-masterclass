// destructuring

const languagesCsv = "C;Dennis Ritchie; 1972";
const languages = languagesCsv.split(";");

const name = languages[0];
const author = languages[1];
const year = languages[2];

console.log(name, author, year); // C Dennis Ritchie 1972
