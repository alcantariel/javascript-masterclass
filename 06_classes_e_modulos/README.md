# Classes e Modules

## Classes

As classes são `um tipo especial de função` que atuam como um `template para criação de objetos`. São um `syntax sugar`, estão um nível de abstração acima das funções construtoras.

As classes `não sofrem hoisting`, não importando a forma como elas foram declaradas.

As classes são formadas por 3 tipos de membros: `constructor`, `prototype methods` e `static methods`.

- constructor: é invocado `no momento da instanciação de uma classe` e `serve para inicializar um determinado objeto`;
- prototype methods: `dependem de uma instância para serem invocados`, são métodos que pertencem ao protótipo do objeto que está sendo instanciado;
- static methods: `não dependem de uma instância para serem invocados`. Estes pertencem à classe e não ao protótipo da instância.

As classes funcionam de maneira similar às funções construtoras.

É possível `criar uma hierarquia de classes` por meio da palavra-chave `extends`.

Ao declarar um construtor na subclasse, é necessário `invocar o construtor da superclasse`, por meio do `super()`, `antes de utilizar a referência this`.

<br>

## Proxy e Reflect

Um `Proxy` e capaz de `interceptar` diversos tipos de operações `em um objeto`.

Existem métodos chamados de `trap`, para diversos tipos de eventos relacionados a um objeto, como:

- apply: é invocado quando uma função é o target e é invocada;
- construct: é invocado quando ocorre uma criação por meio do operador new;
- defineProperty: é invocado quando o método Object.defineProperty é chamado;
- deleteProperty: é invocado quando uma propriedade é deletada;
- get: é invocado quando uma propriedade é acessada;
- getOwnPropertyDescriptor: é invocado quando o método Object.getOwnPropertyDescriptor é chamado;
- getPrototypeOf: é invocado quando o método interno [[GetPrototypeOf]] é chamado;
- has: é invocado quando o operador in é chamado;
- isExtensible: é invocado quando o método Object.isExtensible é chamado;
- ownKeys: é invocado quando o método Reflect.ownKeys é chamado;
- preventExtensions: é invocado quando o método Object.preventExtensions é chamado;
- set: é invocado quando uma propriedade é definida no objeto
- setPrototypeOf: é invocado quando o método Object.setPrototypeOf é chamado.

A `Reflect API` tem os mesmos métodos que existem no Proxy, permitindo a `execução de diversos tipos de operações no objeto alvo`.

<br>

## Modules

No ES6 ou ECMAScript 2015, foi especificado na própria linguagem, baseado no conceito de `importação` e `exportação`.

Por meio da palavra-chave `export`, `é possível exportar qualquer tipo de dado existente dentro de um módulo`.

A palavra chave `import`, `faz a importaç˜ão de qualquer tipo de dado exportado para dentro do módulo`.

<br>

`PARA UTILIZAR MODULES NO NODE.JS, OS ARQUIVOS DEVEM TER A EXTENSÃO .mjs, ALÉM DE TER QUE EXECUTAR COM A FLAG --experimental-modules`.

Exemplo: `node index.mjs --experimental-modules`

<br>

É possível utilizar um `alias` na importação, `renomeando o que estiver sendo importado`.

Por meio do `*` é possível `importar tudo que estiver sendo exportado em um único objeto`.

Também podemos importar e exportar de forma padrão utilizando a palavra-chave `default`. Com isso, não é necessário dar um nome específico para um determinado módulo, porém, só é possível exportar por default, uma única coisa por módulo.

Os imports sofrem o processo de `hoisting`.

Não é permitida a realizar importação e exportação dentro de blocos. Eles precisam estar no top-level, já que são executados em tempo de `parse` e não de `runtime`.
