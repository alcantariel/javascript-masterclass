// new - constructor function

const Person = function (name, city, year) {
  this.name = name;
  this.city = city;
  this.year = year;
  this.getAge = function () {
    return new Date().getFullYear() - this.year;
  };
};

const person1 = new Person("Linus Torvalds", "Helsinki", 1969);
const person2 = new Person("Bill Gates", "Seattle", 1955);

console.log(person1);
// {
//   name: 'Linus Torvalds',
//   city: 'Helsinki',
//   year: 1969,
//   getAge: [Function]
// }

console.log(person2);
// {
//   name: 'Bill Gates',
//   city: 'Seattle',
//   year: 1955,
//   getAge: [Function]
// }
