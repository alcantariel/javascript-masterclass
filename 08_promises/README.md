# Promises

As `promises` são `objetos responsáveis por modelar o comportamento assíncrono`, `permitindo o seu tratamento de uma forma mais fácil e direta`.

Para criar uma `promise` basta instanciá-la, executando a função `resolve` em caso de sucesso, sendo tratado por meio do método `then`.

Em caso de fracasso, a função `reject`, deve ser executada, sendo tratada por meio do método `catch`.

É possível `centralizar` a execução e tratamento de uma promise `encadeando os retornos`.

Por meio do `Promise.all`, é possível executar várias promises ao mesmo tempo, retornando após todas terem sucesso.

Também podemos executar várias promises ao mesmo tempo, retornando após a primeira ter sucesso, por meio do `Promise.race`.
