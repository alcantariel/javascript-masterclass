// Proxy e Reflect - get

function createArray() {
  return new Proxy(
    {},
    {
      set(target, key, value) {
        target[key] = value;

        target.length = target.length || 0;
        target.length++;
      },
      get(target, key) {},
      deleteProperty(target, key) {
        if (key in target) {
          target.length--;
          delete target[key];
        }
      },
    }
  );
}

const languages = createArray();
languages[0] = "Python";
languages[1] = "Ruby";
languages[2] = "JavaScript";

console.log(languages); // { '0': 'Python', '1': 'Ruby', '2': 'JavaScript', length: 3 }
console.log(languages.length); // undefined
