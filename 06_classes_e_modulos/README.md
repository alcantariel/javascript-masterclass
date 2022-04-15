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
