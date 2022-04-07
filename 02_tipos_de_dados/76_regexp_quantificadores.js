// RegExp - quantificadores

let regExp = /^[a-z]+@gmail\.com$/;
console.log(regExp.exec("john@gmail.com")); // ['john@gmail.com', index: 0, input: 'john@gmail.com', groups: undefined]
console.log(regExp.exec("joe@gmail.com")); // ['joe@gmail.com', index: 0, input: 'joe@gmail.com', groups: undefined]
console.log(regExp.exec("boris@gmail.com")); // ['boris@gmail.com', index: 0, input: 'boris@gmail.com', groups: undefined]
