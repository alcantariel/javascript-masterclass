// objetos - shorthand notation

const title = "Clean Code";
const author = "Robert C. Martin";
const pages = 464;
const language = "English";
const available = true;

const book = {
  title: title,
  author: author,
  pages: pages,
  language: language,
  available: available,
};

const bookWithShorthandNotation = {
  title,
  author,
  pages,
  language,
  available,
};

console.log(book);
console.log(bookWithShorthandNotation);
// {
//   title: 'Clean Code',
//   author: 'Robert C. Martin',
//   pages: 464,
//   language: 'English',
//   available: true
// }
