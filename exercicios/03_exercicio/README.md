# Exercício 03

## Objetivo

Crie dois métodos no objeto "database" chamados de "createTable" e "execute".

O comando "createTable" já foi implementado no exercício anterior, mova o código e utilize o método "execute" para invocar dinamicamente o método "createTable".

<br>

## Instruções

No objeto "database", crie uma função chamada "createTable", que recebe o comando por parâmetro.

Mova o código responsável por criar a tabela para dentro do método "createTable".

Crie uma função chamada "execute", invocando dinamicamente a função "createTable".

<br>

## Cenário

database.execute("create table author (id number, name string, age number, city string, state string, country string)");

<br>

## Resultado

```json
{
  "tables": {
    "author": {
      "columns": {
        "id": "number",
        "name": "string",
        "age": "number",
        "city": "string",
        "state": "string",
        "country": "string"
      },
      "data": []
    }
  }
}
```

<br>

## Dicas

Não se esqueça de utilizar o "this" para referenciar a propriedade "tables" do objeto "database". Você pode utilizar a operação String.prototype.startsWith para verificar se o comando começa com "create table" e realizar a chamada para o método "createTable".

<br>

## Conteúdo abordado neste exercício

- Function
- if
- String.prototype.startsWith
- this
- Method Notation
