// clone de objetos com JSON.parse + JSON.stringify

const book1 = {
  name: "Refactoring",
  author: "Martin Fowler",
};

const book2 = {
  name: "Refactoring",
  author: "Martin Fowler",
};

const book3 = book2;
const book4 = JSON.parse(JSON.stringify(book2));

console.log(book2 === book3); // true - mesma referência
console.log(book2 === book4); // false
