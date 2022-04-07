// RegExp - quantificadores

let regExp = /^[a-z]{3,4}@gmail\.com$/;
console.log(regExp.exec("john@gmail.com")); // ['john@gmail.com', index: 0, input: 'john@gmail.com', groups: undefined]
console.log(regExp.exec("jane@gmail.com")); // ['jane@gmail.com', index: 0, input: 'jane@gmail.com', groups: undefined]
console.log(regExp.exec("joe@gmail.com")); // ['joe@gmail.com', index: 0, input: 'joe@gmail.com', groups: undefined]
