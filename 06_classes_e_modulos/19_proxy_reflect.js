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

delete languages[1];
delete languages[2];
delete languages[3];

console.log(languages); // { '0': 'Python', length: 1 }
console.log(languages.length); // 1
