// Proxy e Reflect - Reflect API

function createArray() {
  return new Proxy(
    {},
    {
      set(target, key, value) {
        target.length = target.length || 0;
        target.length++;

        Reflect.set(target, key, value);
      },
      get(target, key) {
        if (typeof key === "string" && key.match(/\d+/)) {
          if (!Reflect.has(target, key)) {
            throw `Property ${key} not found`;
          }
        }

        return Reflect.get(target, key);
      },
      deleteProperty(target, key) {
        if (Reflect.has(target, key)) {
          target.length--;
          Reflect.deleteProperty(target, key);
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
console.log(languages[0]); // "Python"
console.log(languages.length); // 3
delete languages[1];
console.log(languages); // { '0': 'Python', '2': 'JavaScript', length: 2 }
console.log(languages.length); // 2
console.log(languages[3]); // "Python"
