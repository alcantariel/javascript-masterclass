// objetos - propriedades computadas em tempo de execução

const key1 = "title";
const key2 = "author";
const key3 = "pages";
const key4 = "language";
const key5 = "available";
const book = {};

book[key1] = "Clean Code";
book[key2] = "Robert C. Martin";
book[key3] = 464;
book[key4] = "English";
book[key5] = true;

console.log(book);
// {
//   title: 'Clean Code',
//   author: 'Robert C. Martin',
//   pages: 464,
//   language: 'English',
//   available: true
// }
