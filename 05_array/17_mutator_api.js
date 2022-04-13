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

// se retornar 0 ou -1, os elementos ficam onde estão
languages.sort(function (a, b) {
  return 0;
});

console.log(languages);
// [
//   { name: 'Python', year: 1991 },
//   { name: 'C', year: 1972 },
//   { name: 'Java', year: 1995 }
// ]

languages.sort(function (a, b) {
  return -1;
});

console.log(languages);
// [
//   { name: 'Python', year: 1991 },
//   { name: 'C', year: 1972 },
//   { name: 'Java', year: 1995 }
// ]
