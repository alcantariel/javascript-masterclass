// object destructuring - alias

const language = {
  name: "C",
  author: "Dennis Ritchie",
  year: 1972,
};

const { name: aliasName, author: aliasAuthor, year } = language;

console.log(aliasName, aliasAuthor, year); // C Dennis Ritchie 1972
