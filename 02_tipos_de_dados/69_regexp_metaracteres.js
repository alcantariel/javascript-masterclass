// RegExp - metacaracter \

let regExp = /john@gmail\.com/;
console.log(regExp.exec("john@gmail.com")); // ['john@gmail.com', index: 0, input: 'john@gmail.com', groups: undefined]
console.log(regExp.exec("john@gmailxcom")); // null
