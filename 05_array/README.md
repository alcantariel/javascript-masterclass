# Array

Um array é apenas um `objeto` que oferece operações para `acessar` e `manipular` suas propriedades.

É possível inicializar passando `múltiplos elementos`, e também passando apenas um `Number` para a função construtora.

A propriedade `length` indica a `quantidade de elementos que existem dentro do array`.

`Os elementos vazios no array não são considerados no length`.

<br>

## Mutator API

Os `mutator methods` quando invocados `modificam o array`.

- push: adiciona um elemento no final;
- pop: remove um elemento do final;
- unshift: adiciona um elemento no início;
- shift: remove um elemento do início;
- splice: remove, substitui ou adiciona um ou mais elementos em uma determinada posição;
- sort: ordena os elementos de acordo com a função de ordenação;
- reverse: inverte a ordem dos elementos;
- fill: preenche os elementos de acordo com a posição de início e fim.

<br>

## Iteration API

Os `iteration methods` quando invocados `iteram/percorrem sobre os elementos do array`.

- forEach: executa a função passada por parâmetro para cada elemento;
- filter: retorna um novo array contendo somente os elementos que retornarem true na ;função passada por parâmetro
- find: retorna o primeiro elemento que retornou true na função passada por parâmetro;
- some: retorna true se um ou mais elementos retornarem true na função passada por ;parâmetro
- every: retorna true se todos os elementos retornarem true na função passada por ;parâmetro
- map: retorna um novo array com base no retorno da função passada por parâmetro;
- reduce: retorna um valor com base no retorno da funç˜ão passada por parâmetro.

<br>

## Accessor API

Os `accessor methods` quando invocados `retornam informações específicas sobre o array`.

`Todas as operações retornam um novo array, e não modificam o array original.`

- indexOf: retorna a posição do primeiro elemento encontrado;
- lastIndexOf: retorna a posição do último elemento encontrado;
- includes: retorna true se o elemento existir;
- concat: retorna um novo array resultante da concatenação de um ou mais arrays;
- slice: retorna partes de um determinado array de acordo com a posição de início e fim;
- join: converte o array para uma String, juntando os elementos com base em um separador.

<br>

## Map

Um `Map` é um objeto que armazena um conjunto de `chaves` e `valores` que podem ser de `qualquer tipo de dado`. E esta é a grande diferença para o `Object`, que armazena apenas chave do tipo `String` ou `Symbol`.

- size: retorna a quantidade de elementos;
- set: adiciona um par de chave e valor;
- forEach: itera sobre o mapa;
- has: retorna true se a chave existir;
- get: retorna o valor de uma determinada chave;
- delete: remove um par de chave e valor;
- clear: remove todos os elementos.

<br>

### WeakMap

Um `WeakMap` é um objeto similar ao Map, que `permite apenas chaves do tipo Object`, e `mantém as referências de forma fraca`, sendo `volátil e não iterável`.

- set: adiciona um par de chave e valor;
- has: retorna true se a chave existir;
- get: retorna o valor de uma determinada chave;
- delete: remove um par de chave e valor.

Não existe `forEach, size e clear` pois não é garantido que os elementos estarão dentro dele no momento de executar a operação.

Sem a `referência para a chave` não é possível acessar o valor.

Para que serve um `WeakMap`?

Poder implementar uma coleção com referência fraca, para não ter preocupação de remover os elementos desta. E conforme os objetos vão perdendo a referência, naturalmente eles vão sendo coletados, sem se preocupar com vazamentos de memória.
[Discussão WeakMap](https://gist.github.com/rwaldron/963596)

<br>

## Set

Um `Set` é um objeto que armazena `elementos únicos`, que podem ser de qualquer tipo de dado. E a diferença de um `Set` para um `Array` é `não permitir elementos duplicados`.

- size: retorna a quantidade de elementos;
- add: adiciona um elemento;
- forEach: itera sobre o set;
- has: retorna true se o elemento existir;
- delete: remove um elemento;
- clear: remove todos os elementos.

<br>

### WeakSet

Um `WeakSet` é um objeto similar ao Set, que `permite apenas valores do tipo Object` e `mantém as referências de forma fraca`, sendo `volátil` e `não iterável`.

- add: adiciona um elemento;
- has: retorna true se o elemento existir;
- delete: remove um elemento.

Não existe `forEach, size e clear` pois não é garantido que os elementos estarão dentro dele no momento de executar a operação.

Para que serve um `WeakSet`?

Serve para criar coleções sem preocupações com memory leak. E conforme os objetos desta coleção vão perdendo a referência, naturalmente eles vão sendo coletados pelo garbage collector.

<br>

## Iterables e Iterators

São `convenções` implementadas por `Arrays, Maps, Sets e Strings` que os `tornam iteráveis por meio de um protocolo de iteração`.

Além do Array, é possível utilizar o protocolo de iteração dos objetos `Map, Set e String`.

Todo `Iterable tem uma propriedade de chave Symbol.iterator` que `define o protocolo de iteração para o objeto`.
