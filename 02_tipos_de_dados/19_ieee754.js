// ieee754 - resíduos

// os números no final são os resíduos, mas apenas porque ocorre um arredondamento, isso devido a forma de representação numérica

console.log(0.1 + 0.2); // 0.30000000000000004
console.log(666.7 - 666.6); // 0.10000000000002274
console.log(33.3 * 3); // 99.89999999999999
console.log(12.2 / 0.1); // 121.99999999999999

// no caso abaixo, como 0.5 não sofre este arredondamento, o resultado da soma é exata

console.log(0.5 + 0.5); // 1
