// RegExp - grupos de metacaracteres

let regExp = /^\w+@\w+\.\w{2,3}$/;
console.log(regExp.exec("john@gmail.com")); // ['john@gmail.com', index: 0, input: 'john@gmail.com', groups: undefined]
console.log(regExp.exec("boris@hotmail.com")); // ['boris@hotmail.com', index: 0, input: 'boris@hotmail.com', groups: undefined]
console.log(regExp.exec("joe@hotmail.io")); // ['joe@hotmail.io', index: 0, input: 'joe@hotmail.io', groups: undefined]
