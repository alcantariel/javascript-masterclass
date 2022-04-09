// comparação de objetos

const book1 = { title: "Clean Code", author: "Robert C. Martin" };
const book2 = { title: "Clean Code", author: "Robert C. Martin" };

let equal = true;

for (let key in book1) {
  if (book1[key] !== book2[key]) {
    equal = false;
  }
}

for (let key in book2) {
  if (book1[key] !== book2[key]) {
    equal = false;
  }
}

console.log(equal);
