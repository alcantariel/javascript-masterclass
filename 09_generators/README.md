# Generators

Os `generators` tornam possível `pausar a execução de uma determinada função`, permitindo a utilização do `event loop` de forma `cooperativa`.

Os generators, utilizam o método `next para iterar sobre os valores disponíveis durante a execução da função`.

Ao encontrar um `yield` (de conceder, dar o lugar), `a execução da função é pausada até o método next ser invocado novamente`.

O retorno do método `next`, é um `objeto contendo value e done`, seguindo protocolo de iteração.

Por meio do `yield`, é possível `retornar valores de forma similar ao return`.

Além disso, por meio do operator `next`, `é possível enviar um valor para dentro do generator`. Sendo `bidirecional`.

O método `return` encerra o generator, `podendo retornar um valor específico`.

O método `throw` lança uma exceção dentro do generator, `interrompendo o fluxo de execução caso a exceção não tenha sido tratada adequadamente`.

Onde é possível utilizar os generators?

Como os generators `implementam o protocolo de iteração`, é possível utilizá-los com `Symbol.iterator` de forma simples.

Além disso, é possível utilizar generators para `sincronizar chamadas assíncronas` de forma similar ao `async/await`.
