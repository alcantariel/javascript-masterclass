// RegExp - metacaracter ^ e $

let regExp = /^john@gmail\.com$/;
console.log(regExp.exec("Email: john@gmail.com")); // null
console.log(regExp.exec("john@gmail.com test")); // null
console.log(regExp.exec("john@gmail.com")); // ['john@gmail.com', index: 0, input: 'john@gmail.com', groups: undefined]
