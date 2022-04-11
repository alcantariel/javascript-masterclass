// new - factory function

const createPerson = function (name, city, year) {
  return {
    name,
    city,
    year,
    getAge() {
      return new Date().getFullYear() - this.year;
    },
  };
};

const person1 = createPerson("Linus Torvalds", "Helsinki", 1969);
const person2 = createPerson("Bill Gates", "Seattle", 1955);

console.log(person1);
// {
//   name: 'Linus Torvalds',
//   city: 'Helsinki',
//   year: 1969,
//   getAge: [Function: getAge]
// }

console.log(person2);
// {
//   name: 'Bill Gates',
//   city: 'Seattle',
//   year: 1955,
//   getAge: [Function: getAge]
// }
