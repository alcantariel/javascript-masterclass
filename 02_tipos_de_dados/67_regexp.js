// RegExp - exec

let regExp = /john@gmail.com/;
let result = regExp.exec("john@gmail.com");

console.log(result); // ['john@gmail.com', index: 0, input: 'john@gmail.com', groups: undefined]

console.log(result[0]); // john@gmail.com
console.log(result.index); // 0
console.log(result.input); // john@gmail.com

let result2 = regExp.exec("johndoe@gmail.com");
console.log(result2); // // null
