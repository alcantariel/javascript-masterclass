// objetos - consulta de propriedades com propriedades computadas

const book = {
  title: "Clean Code",
  author: "Robert C. Martin",
  pages: 464,
  language: "English",
  available: true,
};

for (let key in book) {
  console.log(key); // title, author, pages, language, available
}

for (let key in book) {
  console.log(book[key]); // Clean Code, Robert C. Martin, 464, English, true
}
