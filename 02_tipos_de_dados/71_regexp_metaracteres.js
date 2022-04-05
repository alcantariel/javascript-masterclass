// RegExp - metacaracter ^

let regExp = /^john@gmail\.com/;
console.log(regExp.exec("Email: john@gmail.com")); // null
console.log(regExp.exec("john@gmail.com test")); // ['john@gmail.com', index: 0, input: 'john@gmail.com test', groups: undefined]
