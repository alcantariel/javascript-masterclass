// new - constructor function com herança

const Person = function (name, city, year) {
  this.name = name;
  this.city = city;
  this.year = year;
};

Person.prototype.getAge = function () {
  return new Date().getFullYear() - this.year;
};

const person1 = new Person("Linus Torvalds", "Helsinki", 1969);
const person2 = new Person("Bill Gates", "Seattle", 1955);

console.log(person1);
// {
//   name: 'Linus Torvalds',
//   city: 'Helsinki',
//   year: 1969,
// }

console.log(person2);
// {
//   name: 'Bill Gates',
//   city: 'Seattle',
//   year: 1955,
// }

console.log(person1.getAge); // [Function: getAge]
console.log(person2.getAge); // [Function: getAge]

console.log(person1.__proto__); // { getAge: [Function: getAge] }
console.log(person2.__proto__); // { getAge: [Function: getAge] }

console.log(person1.__proto__ === person2.__proto__); // true
