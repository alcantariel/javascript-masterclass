// arrow function - retornando objetos

const createPersonWithExplicitReturn = (name, city, year) => {
  return {
    name,
    city,
    year,
  };
};

const createPersonWithImplicitReturn = (name, city, year) => ({
  name,
  city,
  year,
});

const person = createPersonWithExplicitReturn("Alan Kay", "Springfield", 1940);
const person2 = createPersonWithImplicitReturn("Alan Kay", "Springfield", 1940);
