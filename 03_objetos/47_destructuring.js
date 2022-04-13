// object destructuring

const language = {
  name: "C",
  author: "Dennis Ritchie",
  year: 1972,
};

const { name, author, year } = language;

console.log(name, author, year); // C Dennis Ritchie 1972
