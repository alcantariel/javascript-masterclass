// arrow function - this e arguments

const person = {
  name: "James Gosling",
  city: "Alberta",
  year: 1955,
  getAge() {
    return new Date().getFullYear() - this.year;
  },
};

console.log(person.getAge()); // curr year - year
