// Proxy e Reflect - set

function createArray() {
  return new Proxy(
    {},
    {
      set(target, key, value) {
        console.log(target, key, value);
        // target é o objeto alvo, primeiro parâmetro do proxy
        // key é a chave do objeto
        // value é o valor passado
      },
    }
  );
}

const languages = createArray();
languages[0] = "Python";
languages[1] = "Ruby";
languages[2] = "JavaScript";

// ao definir o método set vazio
// não exibe nenhuma propriedade
// por ter que inserir manualmente
// por meio do método set
console.log(languages); // {}
console.log(languages.length); // undefined
