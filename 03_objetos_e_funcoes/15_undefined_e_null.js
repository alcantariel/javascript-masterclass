// remoção de propriedades

const book = {
  title: "Clean Code",
  author: "Robert C. Martin",
  pages: 464,
  language: "English",
  available: true,
};

book.available = undefined;
console.log("available" in book); // true

book.available = null;
console.log("available" in book); // true

delete book.available;
console.log("available" in book); // false

console.log("pages" in book); // true
delete book["pages"];
console.log("pages" in book); // false
