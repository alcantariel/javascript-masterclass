// Object API - defineProperty

const javascript = {};
Object.defineProperty(javascript, "name", {
  value: "JavaScript",
});

console.log(javascript); // {} - devido as outras propriedades serem false, a propriedade não vai ser: apagada, enumerada ou modificada
console.log(Object.keys(javascript)); // []
console.log(javascript.name); // JavaScript
