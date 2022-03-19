# Tipos de Dados

Os tipos de dados na linguagem JavaScript se dividem em `primitivos` e `objetos`.

Os `primitivos` são imutáveis, ou seja, seu valor não é alterado ao longo do tempo, são eles:

- number
- string
- boolean
- symbol
- object
- undefined

Os `objetos` são valores que representam uma referência em `memória` que pode ser alterada.

<br>

## Number

O tipo Number é primitivo, imutável e é representado internamente pelo padrão `IEEE 754` de 64 bits. E "representado" quer dizer a forma que ele é tratado/armazenado em memória.

Suporta os sistemas de numeração `decimal, hexadecimal, binário e octal`.

- decimal: o sistema de numeração `decimal`, de `base 10`, deve iniciar com um número de 1 a 9, seguido por números de 0 a 9 com ou sem ponto, indicando se é inteiro ou decimal;

- hexadecimal: o sistema de numeração `hexadecimal`, de `base 16`, deve iniciar com 0x ou 0X, seguido por números de 0 a 9 e letras de A a F;

- binário: o sistema de numeração `binário`, de `base 2`, deve iniciar com 0b ou 0B, seguido por números de 0 a 1;

- octal: o sistema de numeração `octal`, de `base 8`, deve iniciar c om 0, 0o ou 0O, seguido por números de 0 a 7.

<br>

| decimal | hexadecimal | binário | octal |
| ------- | ----------- | ------- | ----- |
| 0       | 0           | 000000  | 0     |
| 1       | 1           | 000001  | 1     |
| 2       | 2           | 000010  | 2     |
| 3       | 3           | 000011  | 3     |
| 4       | 4           | 000100  | 4     |
| 5       | 5           | 000101  | 5     |
| 6       | 6           | 000110  | 6     |
| 7       | 7           | 000111  | 7     |
| 8       | 8           | 001000  | 10    |
| 9       | 9           | 001001  | 11    |
| 10      | A           | 001010  | 12    |
| 11      | B           | 001011  | 13    |
| 12      | C           | 001100  | 14    |
| 13      | D           | 001101  | 15    |
| 14      | E           | 001110  | 16    |
| 15      | F           | 001111  | 17    |
| 16      | 10          | 010000  | 20    |
| 17      | 11          | 010001  | 21    |
| 18      | 12          | 010011  | 22    |
| 19      | 13          | 010011  | 23    |
| 20      | 14          | 010100  | 24    |
| 21      | 15          | 010101  | 25    |
| 22      | 16          | 010110  | 26    |
| 23      | 17          | 010111  | 27    |
| 24      | 18          | 011000  | 30    |
| 25      | 19          | 011001  | 31    |
| 26      | 1A          | 011010  | 32    |
| 27      | 1B          | 011011  | 33    |
| 28      | 1C          | 011100  | 34    |
| 29      | 1D          | 011101  | 35    |
| 30      | 1E          | 011110  | 36    |
| 31      | 1F          | 011111  | 37    |
| 32      | 20          | 100000  | 40    |

<br>

Os métodos `toExponential, toFixed e toPrecision` podem ser utilizados para `mudar a forma que o número é representado`.

<br>

### Operadores Numéricos

- operadores aritméticos: `+, -, *, / e %`;

- operadores de atribuição: `+=, -=, *=, /= e %=`;

- operadores de incremento e decremento: `++ e --`;

- operadores binários: `|, &, ^, ~, <<, >> e >>>`.

<br>

Obs: cuidado para nao confundir os operadores binários | e & com os operadores booleanos || e &&.

<br>

### Conversão Numérica
