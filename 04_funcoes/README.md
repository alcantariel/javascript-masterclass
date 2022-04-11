# Funções

Uma função é `objeto que contém um bloco de código executável`.

Qual é a diferença entre `function declaration` e `function expression`?

- A diferença é que a `function declaration` sofre um processo chamado de `hoisting`, do significado de içar, puxar para cima. E ela acaba ficando disponível ao longo de todo o bloco.

Na linguagem JavaScript, `as funções são de primeira classe`, ou seja, `podem ser atribuídas a uma variável, passadas por parâmtros ou serem retornadas de outras funç˜oes`.

`É possível invocar uma função com menos ou mais parâmetros`, não necessariamente seguindo o que está declarado.

Podemos definir `valores padrão` para cada um dos parâmetros de uma função. Esse valor padrão é assumido caso o parâmetro não seja passado.

Por meio da variável implícita `arguments` é possível acessar os parâmetros da função invocada.

Também é possível acessar os parâmetros da função invocada por meio do `rest parameter`. Porém, o rest parameter deve ser sempre o `último` da lista de parâmetros.

<br>

## this

Existe uma variável implícita chamada de `this` que `faz referência para o objeto responsável pela sua invocação`.

<br>

## getter e setter

As funções do tipo `getter` e `setter` servem para interceptar o acesso as propriedades de um determinado objeto.

`Utilize chaves diferentes para a função setter e a propriedade do objeto.`

Por meio da operação `defineProperty` da Object API, também é possível `definir funções do tipo getter e setter`. E também é necessário utilizar chaves diferentes para a função setter e a propriedade do objeto.

<br>

## call, apply e bind

Por meio das operações `call` e `apply` é possível invocar uma função `passando o this por parâmetro`.

Qual é a diferença entre `call` e `apply`?

- Apenas forma de passar os outros parâmetros. O call aceita um ou mais parâmetros, enquanto o apply aceita um conjunto de parâmetros.

A operação `bind` permite `encapsular o this dentro da função`, retornando-a.

<br>

## new

Permite criar objetos por meio de `funções construtoras` quanto das `classes`.

Como fazer para criar um objeto `a partir da mesma estrutura`?

<br>

### Função Fábrica

A `função fábrica`, que é um tipo de padrão, `retorna um novo objeto após ser invocada diretamente`. Geralmente o nome da função começa com `create` ou com algum outro verbo que remete à ideia de `criação, fabricaç˜ão`.

O que fazer para eliminar a duplicação e reusar propriedades entre os objetos?

- Abstraindo as propriedades em comum para um `objeto que será protótipo e passando este protótipo para o objeto criado por meio da função Object.setPrototypeOf`.

<br>

### Função Construtora

A `função construtora retorna um novo objeto ao ser invocada por meio do operador new`. Geralmente o nome da função começa com `letra maiúscula` para lembrar da utilização do operador `new`. O operador `new` faz com que este objeto associe as propriedades ao `this`.

Toda função `tem uma propriedade chamada prototype`, que é vinculada ao `__proto__` do objeto criado pelo operador `new`.

- \_\_proto\_\_ é a cadeia de protótipos que o objeto está herdando.

- prototype é um objeto que só as funções possuem e apenas as construtoras "aproveitam/utilizam".

<br>

`Não esqueça de utilizar o operador new ao utilizar funções construtoras.`

<br>
