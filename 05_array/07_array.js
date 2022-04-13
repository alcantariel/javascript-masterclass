// array - length com elementos vazios

const languages = [];
languages[0] = "Python";
languages[1] = "C";
languages[2] = "Java";

console.log(languages.length); // 3

delete languages[1];

console.log(languages); // [ 'Python', <1 empty item>, 'Java']
console.log(languages.length); // 3
