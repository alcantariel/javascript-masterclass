// Proxy e Reflect

function createArray() {
  return {};
}

const languages = createArray();
languages[0] = "Python";
languages[1] = "Ruby";
languages[2] = "JavaScript";

console.log(languages); // { '0': 'Python', '1': 'Ruby', '2': 'JavaScript' }
console.log(languages.length); // undefined
