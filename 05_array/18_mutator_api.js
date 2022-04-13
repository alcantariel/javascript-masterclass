// Mutator API - sort

const languages = [
  {
    name: "Python",
    year: 1991,
  },
  {
    name: "C",
    year: 1972,
  },
  {
    name: "Java",
    year: 1995,
  },
];

// se retornar 1, ele é invertido
languages.sort(function (a, b) {
  return 1;
});

console.log(languages);
// [
//   { name: 'Java', year: 1995 },
//   { name: 'C', year: 1972 }
//   { name: 'Python', year: 1991 },
// ]
