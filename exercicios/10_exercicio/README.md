# Exercício 10

## Objetivo

Divida o projeto em módulos

<br>

## Instruções

Crie um módulo chamado "database.mjs"

Mova as classes "Database", "Parser" e "DatabaseError" para o módulo "database.mjs"

Exporte a classe "Database"

Importe a classe "Database" no main.mjs

Mova as classes "Parser" e "DatabaseError" para seus próprios módulos realizando o mesmo procedimento feito na classe "Database"

<br>

## Cenário

let database = new Database();

database.execute("create table author (id number, name string, age number, city string, state string, country string)");

database.execute("insert into author (id, name, age) values (1, Douglas Crockford, 62)");

database.execute("insert into author (id, name, age) values (2, Linus Torvalds, 47)");

database.execute("insert into author (id, name, age) values (3, Martin Fowler, 54)");

database.execute("delete from author where id = 2");

console.log(JSON.stringify(database.execute("select name, age from author")));

<br>

## Resultado

```json
[
  {
    "name": "Douglas Crockford",
    "age": "62"
  },
  {
    "name": "Martin Fowler",
    "age": "54"
  }
]
```

<br>

## Conteúdo abordado neste exercício

- Modules
