// operador in

const book = {
  title: "Clean Code",
  author: "Robert C. Martin",
  pages: 464,
  language: "English",
  available: true,
};

console.log("title" in book); // true
console.log("publisher" in book); // false
