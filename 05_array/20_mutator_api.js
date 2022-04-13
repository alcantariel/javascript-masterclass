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

languages.sort(function (a, b) {
  return b.year - a.year;
});

console.log(languages);
// [
//   { name: 'Java', year: 1995 },
//   { name: 'Python', year: 1991 },
//   { name: 'C', year: 1972 }
// ]
