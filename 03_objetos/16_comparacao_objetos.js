// comparação de objetos

const book1 = { title: "Clean Code", author: "Robert C. Martin" };
const book2 = { title: "Clean Code", author: "Robert C. Martin" };

console.log(book1 === book2); // false
console.log(book1 == book2); // false

console.log(book1 == book1); // true
console.log(book2 == book2); // true
