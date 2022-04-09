// objetos - atribuição por meio da referência

const book = Object.create({});
book.title = "Clean Code";
book.author = "Robert C. Martin";
book.pages = 464;
book.language = "English";
book.available = true;

console.log(book);
// {
//   title: 'Clean Code',
//   author: 'Robert C. Martin',
//   pages: 464,
//   language: 'English',
//   available: true
// }
