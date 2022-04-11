// new - factory function com herança

const personPrototype = {
  getAge() {
    return new Date().getFullYear() - this.year;
  },
};

const createPerson = function (name, city, year) {
  const person = {
    name,
    city,
    year,
  };

  Object.setPrototypeOf(person, personPrototype);

  return person;
};

const person1 = createPerson("Linus Torvalds", "Helsinki", 1969);
const person2 = createPerson("Bill Gates", "Seattle", 1955);

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
