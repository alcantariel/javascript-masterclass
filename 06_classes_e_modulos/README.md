# Classes e Módulos

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
