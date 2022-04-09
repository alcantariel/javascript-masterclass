// objetos - cópia das propriedades

const book1 = {
  title: "Clean Code",
  author: "Robert C. Martin",
  pages: 464,
  language: "English",
  available: true,
};
const book2 = {};

for (let key in book1) {
  book2[key] = book1[key];
}

console.log(book1);
console.log(book2);
// {
//   title: 'Clean Code',
//   author: 'Robert C. Martin',
//   pages: 464,
//   language: 'English',
//   available: true
// }
