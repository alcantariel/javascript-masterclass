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
