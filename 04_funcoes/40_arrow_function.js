// arrow function - this

const person = {
  name: "James Gosling",
  city: "Alberta",
  year: 1955,
  getAge: () => {
    return new Date().getFullYear() - this.year;
  },
};

// a arrow function não injeta o this, que seria person
// this.year passa a ser undefined
// current year - undefined = NaN

console.log(person.getAge()); // NaN
