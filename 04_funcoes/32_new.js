// criando o algoritmo de new

const _new = function (constructorFn, ...params) {
  const obj = {};

  Object.setPrototypeOf(obj, constructorFn.prototype);

  // constructorFn = Person
  // apply passou o this que é o obj
  // apply recebeu os params para popular o obj com name, city e year
  constructorFn.apply(obj, params);

  return obj;
};

const Person = function (name, city, year) {
  this.name = name;
  this.city = city;
  this.year = year;
};

Person.prototype.getAge = function () {
  return new Date().getFullYear() - this.year;
};

const person1 = _new(Person, "Linus Torvalds", "Helsinki", 1969);
const person2 = _new(Person, "Bill Gates", "Seattle", 1955);

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
