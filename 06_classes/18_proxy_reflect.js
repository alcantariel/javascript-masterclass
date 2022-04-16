// Proxy e Reflect - delete

function createArray() {
  return new Proxy(
    {},
    {
      set(target, key, value) {
        target[key] = value;

        target.length = target.length || 0;
        target.length++;
      },
      deleteProperty(target, key) {
        target.length--;
        delete target[key];
      },
    }
  );
}

const languages = createArray();
languages[0] = "Python";
languages[1] = "Ruby";
languages[2] = "JavaScript";

delete languages[1];
delete languages[2];
delete languages[3]; // não existe

console.log(languages); // { '0': 'Python', length: 0 }
console.log(languages.length); // 0
