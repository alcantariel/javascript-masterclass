// object destructuring

const language = {
  name: "C",
  author: "Dennis Ritchie",
  year: 1972,
  company: {
    name: "Bell Labs",
  },
};

const {
  name,
  author,
  year,
  company: { name: companyName },
} = language;

console.log(name, author, year); // C Dennis Ritchie 1972
console.log(companyName); // Bell Labs
