// RegExp - grupos de captura para extrair valores

let regExp = /^(\w+)@(\w+)(\.\w{2,3})+$/;
const result = regExp.exec("john@gmail.com");

console.log(result[0]); // john@gmail.com
console.log(result[1]); // john
console.log(result[2]); // gmail
console.log(result.index); // 0
console.log(result.input); // john@gmail.com

console.log(result); // [john@gmail.com, john, gmail]
