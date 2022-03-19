// conversão de tipos - parseFloat

console.log(parseFloat("10")); // 10
console.log(parseFloat("9.9")); // 9.9
console.log(parseFloat("2.5")); // 2.5
console.log(parseFloat("0xFF")); // 0 - considera apenas o número e ignora o resto da string
console.log(parseFloat("xFF")); // NaN
console.log(parseFloat("1x01")); // 1
