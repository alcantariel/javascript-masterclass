# Modules

No ES6 ou ECMAScript 2015, foi especificado na própria linguagem, baseado no conceito de `importação` e `exportação`.

Por meio da palavra-chave `export`, `é possível exportar qualquer tipo de dado existente dentro de um módulo`.

A palavra chave `import`, `faz a importaç˜ão de qualquer tipo de dado exportado para dentro do módulo`.

<br>

`DEPENDENDO DA VERSÃO DO NODE, PARA UTILIZAR MODULES NO NODE.JS, OS ARQUIVOS DEVEM TER A EXTENSÃO .mjs, ALÉM DE TER QUE EXECUTAR COM A FLAG --experimental-modules.`

<br>

É possível utilizar um `alias` na importação, `renomeando o que estiver sendo importado`.

Por meio do `*` é possível `importar tudo que estiver sendo exportado em um único objeto`.

Também podemos importar e exportar de forma padrão utilizando a palavra-chave `default`. Com isso, não é necessário dar um nome específico para um determinado módulo, porém, só é possível exportar por default, uma única coisa por módulo.

Os imports sofrem o processo de `hoisting`.

Não é permitida a realizar importação e exportação dentro de blocos. Eles precisam estar no top-level, já que são executados em tempo de `parse` e não de `runtime`.
