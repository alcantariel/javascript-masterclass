// math api - operações para arredondamento e descobrir/trocar sinal

console.log(Math.abs(10)); // 10
console.log(Math.abs(-10)); // 10
console.log(Math.ceil(1.1)); // 2
console.log(Math.ceil(-1.1)); // -1
console.log(Math.floor(9.9)); // 9
console.log(Math.floor(-9.9)); // -10
console.log(Math.round(4.5)); // 5 - maior número é 5, a partir do 5 vai para cima
console.log(Math.round(4.4)); // 4
console.log(Math.round(-4.5)); // -4 - maior número é -4, parece que a lógica é "invertida"
console.log(Math.round(-4.6)); // -5
console.log(Math.sign(5)); // 1
console.log(Math.sign(-5)); // -1
console.log(Math.trunc(2.3)); // 2
console.log(Math.trunc(-2.3)); // -2
