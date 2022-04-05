// RegExp - metacaracter .

let regExp = /john.@gmail.com/;
console.log(regExp.exec("johna@gmail.com")); // ['johna@gmail.com', index: 0, input: 'johna@gmail.com', groups: undefined]
console.log(regExp.exec("johnx@gmail.com")); // ['johnx@gmail.com', index: 0, input: 'johnx@gmail.com', groups: undefined]
console.log(regExp.exec("johnx@gmailxcom")); // ['johnx@gmailxcom', index: 0, input: 'johnx@gmailxcom', groups: undefined]
console.log(regExp.exec("johnxx@gmail.com")); // null - ainda não possui quantificadores
