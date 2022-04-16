# Async/Await

O `async/await` facilita a `interação com chamadas assíncronas`, `aguardando o retorno de uma determinada promise`.

É possível `iterar` usando async/await?

- É possível utilizar o `for of` para iterar sobre um array de promises, esperando o resultado de cada uma, já que o `forEach` internamente não espera o resultado das funções, seguindo o fluxo mesmo com async/await.

Também é possível utilizar o bloco `for-await-of` para iterar sobre um iterator de promises.

<br>

`DEPENDENDO DA VERSÃO DO NODE, É NECESSÁRIO UTILIZAR A FLAG --harmony-async-iteration PARA A FUNCIONALIDADE for-await-of.`

<br>
