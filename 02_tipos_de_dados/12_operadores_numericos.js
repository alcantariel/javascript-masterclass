// operadores numéricos - operadores binários

function to32Bits(n) {
  return n.toString().padStart(32, 0);
}

/**
 * | or
 * & and
 * ^ xor
 * ~ not
 * << shift - deslocamento para esquerda
 * >> shift - deslocamento para direita
 * >>> shift - deslocamento para direita com mudança de sinal
 *
 * o primeiro bit representa o sinal, 0 é positivo e 1 é negativo
 */

// or operator (0 e 1, dá 1. 0 e 0, dá 0. 1 e 1, dá 0 e volta 1)

console.log(4 | 3); // 7
console.log(to32Bits(4)); //   00000000000000000000000000000100
console.log(to32Bits(3)); //   00000000000000000000000000000011
//                           = 00000000000000000000000000000111
console.log(0b111); // 7

// and operator (0 e 0, dá 0. 0 e 1, dá 0. 1 e 1, dá 1)

console.log(3 & 1); // 1
console.log(to32Bits(3)); //   00000000000000000000000000000011
console.log(to32Bits(1)); //   00000000000000000000000000000001
//                           = 00000000000000000000000000000001
console.log(0b1); // 1

// xor operator (0 e 0, dá 0. 0 e 1, dá 1. 1 e 1, dá 0)

console.log(5 ^ 2); // 7
console.log(to32Bits(5)); //   00000000000000000000000000000101
console.log(to32Bits(2)); //   00000000000000000000000000000010
//                           = 00000000000000000000000000000111
console.log(0b111); // 7

// not operator: inverte todos os bits, inclusive sinal (0 vira 1, 1 vira 0)

console.log(~2); // -3
console.log((-3 >>> 0).toString(2)); // 11111111111111111111111111111101
console.log(to32Bits(2)); //            00000000000000000000000000000010

// << shift para esquerda: o bit vai andar para a esquerda 16 8 `4` 2 1, no exemplo, serão 2x

console.log(4 << 2); // 16 - `16` 8 4 2 1
console.log(to32Bits(4)); //  00000000000000000000000000000100
console.log(to32Bits(16)); // 00000000000000000000000000010000
//                            deslocou 2 bits para a esquerda

// >> shift para direita: o bit vai andar para a direita `128` 64 32, no exemplo, será 1x

console.log(128 >> 1); // 62 - 128 `64` 32
console.log(to32Bits(128)); // 00000000000000000000000010000000
console.log(to32Bits(64)); //  00000000000000000000000001000000
//                             deslocou 1 bit para a direita

// >> shift deslocamento para direita com mudança de sinal

console.log(-2 >>> 1); // 2147483647
console.log((-2 >>> 0).toString(2)); // 11111111111111111111111111111110 (primeiro bit = 1, logo, sinal negativo)
console.log(to32Bits(2147483647)); //   01111111111111111111111111111111 (deslocou tudo para o lado direito e passou a ser positivo)
