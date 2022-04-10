# Objetos

Um objeto é uma `coleção dinâmica de propriedades` definidas por `chaves`, que podem ser do tipo String ou Symbol, e `valores` que podem ser de qualquer tipo de dado.

| Chave     | Valor            |
| --------- | ---------------- |
| title     | Clean Code       |
| author    | Robert C. Martin |
| pages     | 464              |
| language  | English          |
| available | true             |

<br>

É possível criar objetos de várias formas:

- notação literal;
- função construtora;
- método create da Object API.

<br>

Existe `diferença` entre as três formas?

- Não há diferença no resultado, mas todas elas possuem objetivos específicos.

<br>

Uma das diversas maneiras de atribuir propriedades a um objeto é `durante a sua inicialização`, pela `notação literal`.

`Obs: dependendo da chave é necessário declará-la diretamente como String.`

Também é possível computar as chaves `em tempo de execução`.

Além da notação literal, é possível atribuir propriedades aos objetos `por meio da sua referência`.

Assim como na notação literal, é possível computar as chaves de um objeto `em tempo de execução por meio da sua referência`.

Cada uma das propriedades de um objeto podem ser consultadas por meio da sua referência, `de forma direta`.

É possível consultar cada uma das propriedades de um objeto por meio da `computação das chaves`.

<br>

## undefined e null

O tipo `undefined` é retornado caso a `chave não seja encontrada`.

Qual a diferença entre os tipos `undefined` e `null`?

- null indica a ausência de valor;
- undefined indica inexistência, falta de definição/inicialização.

<br>

É possível consultar uma determinada chave por meio do operador `in`.

`Obs: Não atribua para undefined ou null com a intenção de apagar uma propriedade`.

As propriedades de um objeto podem ser apagadas por meio do operador `delete`.

<br>

## Comparação de Objetos

A comparação dos objetos é feita por meio da sua `referência`, assim, `ainda que dois objetos tenham exatamente as mesmas propriedades eles serão considerados diferentes`.

Uma das formas para comparar os objetos é `analisando cada uma das suas propriedades` por meio da comparação das chaves e valores.

Para garantir que um objeto é igual ao outro é `necessário verificar seus protótipos`.

<br>

## Herança

O principal objetivo da herança é `permitir o reuso de código por meio de compartilhamento de propriedades entre objetos, evitando a duplicação`.

Na linguagem JavaScript a herança é realizada entre `objetos` e não classes. Herança baseada em `protótipos`. Todo objeto tem uma referência para um ou mais protótipos.

A propriedade `__proto__` é uma referência para o protótipo do objeto.

Na criação de um objeto, todos eles já apontam por padrão para o protótipo de Object.

O método `hasOwnProperty` pode ser utilizado para determinar se uma propriedade `pertence ao objeto`.

Os métodos `Object.setPrototypeOf e Object.getPrototypeOf` permitem a interação com o protótipo do objeto.

Com o método `Object.create` é possível c riar um objeto passando o seu protótipo por parâmetro.

`Sem o seu protótipo`, o objeto `perde algumas operações importantes`.

Caso a mesma propriedade exista no objeto e no seu protótipo, `a propriedade do próprio objeto é retornada, fazendo sombra (shadowing) à propriedade do protótipo`. A propriedade mais específica sempre é retornada.

<br>

## Object API

- assign: faz a cópia das propriedades dos objetos passados por parâmetro para o objeto alvo, que é retornado;
- keys: retorna as chaves das propriedades do objeto;
- values: retorna os valores das propriedades do objeto;
- entries: retorna as propriedades do objeto em pares de chave e valor;
- is: compara dois objetos, considerando os tipos de dados, de forma similar ao operador ===;
- defineProperty: adiciona chaves e valores nas propriedades do objeto alvo com algumas configurações
  - configurable: permite que uma determinada propriedade seja apagada;
  - enumerable: permite que uma determinada propriedade seja enumerada;
  - value: define o valor de uma determinada propriedade;
  - writable: permite que uma determinada propriedade tenha seu valor modificado.
- preventExtensions: impede que o objeto tenha novas propriedades, mas permite modificar ou remover as existentes;
- seal: impede que o objeto tenha novas propriedades ou apague as existentes, mas permite modificar as existentes;
- freeze: impede que o objeto tenha novas propriedades, apague ou modifique as existentes.

| Fn                       | Create | Read | Update | Delete |
| ------------------------ | ------ | ---- | ------ | ------ |
| Object.preventExtensions | no     | yes  | yes    | yes    |
| Object.seal              | no     | yes  | yes    | no     |
| Object.freeze            | no     | yes  | no     | no     |

`Não é possível alterar o protótipo do objeto, ele se torna imutável.`

<br>

## JSON

JSON ou JavaScript Object Notation, `é um formato de intercâmbio/transferência de dados` derivado da linguagem JavaScript que foi descoberto por `Douglas Crockford` e padronizado pela `ECMA-404`.

O JSON é utilizado para troca/transferência de dados entre sistemas.

Os tipos de dados suportados pelo JSON:

| Tipos de Dados |
| -------------- |
| Number         |
| String         |
| Boolean        |
| Object         |
| Array          |
| null           |

<br>

O método `JSON.stringify` converte um determinado tipo de dado para JSON.

O método `JSON.parse` converte um JSON para um determinado tipo de dado.

`JSON e Object são dois conceitos completamente diferentes.`
