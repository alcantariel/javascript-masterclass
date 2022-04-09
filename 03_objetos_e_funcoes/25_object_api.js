// Object API - assign

const javascriptTarget = Object.create({});
const newJavascriptTarget = Object.assign(
  javascriptTarget,
  {
    name: "JavaScript",
    year: 1995,
    paradigm: "OO and Functional",
  },
  {
    author: "Brendan Eich",
    influencedBy: "Java, Scheme and Self",
  }
);

console.log(javascriptTarget);
console.log(newJavascriptTarget);
// {
//   name: 'JavaScript',
//   year: 1995,
//   paradigm: 'OO and Functional',
//   author: 'Brendan Eich',
//   influencedBy: 'Java, Scheme and Self'
// }
