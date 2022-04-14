# Array

Um array é apenas um `objeto` que oferece operações para `acessar` e `manipular` suas propriedades.

É possível inicializar passando `múltiplos elementos`, e também passando apenas um `Number` para a função construtora.

A propriedade `length` indica a `quantidade de elementos que existem dentro do array`.

`Os elementos vazios no array não são considerados no length`.

<br>

## Mutator API

Os `mutator methods` quando invocados `modificam o array`.

- push: adiciona um elemento no final
- pop: remove um elemento do final
- unshift: adiciona um elemento no início
- shift: remove um elemento do início
- splice: remove, substitui ou adiciona um ou mais elementos em uma determinada posição
- sort: ordena os elementos de acordo com a função de ordenação
- reverse: inverte a ordem dos elementos
- fill: preenche os elementos de acordo com a posição de início e fim

<br>

## Iteration API

Os `iteration methods` quando invocados `iteram/percorrem sobre os elementos do array`.

- forEach: executa a função passada por parâmetro para cada elemento
- filter: retorna um novo array contendo somente os elementos que retornarem true na função passada por parâmetro
- find: retorna o primeiro elemento que retornou true na função passada por parâmetro
- some: retorna true se um ou mais elementos retornarem true na função passada por parâmetro
- every: retorna true se todos os elementos retornarem true na função passada por parâmetro
- map: retorna um novo array com base no retorno da função passada por parâmetro
- reduce: retorna um valor com base no retorno da funç˜ão passada por parâmetro

<br>
