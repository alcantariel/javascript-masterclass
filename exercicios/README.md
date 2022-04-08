# Exercícios

Construção de um gerenciador de banco de dados, ou SGBD, com suporte para a linguagem SQL.

O objetivo será executar os seguintes comandos:

<br>

**CREATE TABLE**

create table author (id number, name string, age number, city string, state string, country string)

<br>

**INSERT**

insert into author (id, name, age) values (1, Douglas Crockford, 62)

<br>

**SELECT**

select name, age, city from author where age > 50 and age < 60

<br>

**UPDATE**

update author set age = 45 where id = 2

<br>

**DELETE**

delete from author where age < 50
