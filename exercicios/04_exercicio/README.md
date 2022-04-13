# Exercício 03

## Objetivo

Lance uma exceção caso o comando não exista, interrompendo o fluxo de execução.

<br>

## Instruções

Crie uma função construtora chamada "DatabaseError" que recebe dois parâmetros: "statement" e "message".

Dentro do método "execute", caso o comando passado por parâmetro não exista, instancie a função construtora "DatabaseError", lançando-a como um erro.

Envolva a chamada para o objeto "database" em um bloco try/catch imprimindo a propriedade "message" do objeto "DatabaseError".

<br>

## Cenário

database.execute("create table author (id number, name string, age number, city string, state string, country string)");

database.execute("select id, name from author");

<br>

## Resultado

"Syntax error: 'select id, name from author'"

<br>

## Dicas

Não esqueça de utilizar o operador new para instanciar a função construtora "DatabaseError" e de utilizar Template Literals para montar a mensagem de erro.

<br>

## Conteúdo abordado neste exercício

- new
- throw
- try
- catch
- Template Literals
- Constructor Function
