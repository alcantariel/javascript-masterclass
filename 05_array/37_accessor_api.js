// Accessor API - concat

const ooLanguages = ["Smalltalk", "C++", "Java"];
const functionalLanguages = ["Haskell", "Scheme"];
const languages = ooLanguages.concat(functionalLanguages);
const languages2 = [].concat(ooLanguages, functionalLanguages);

console.log(languages); // [ 'Smalltalk', 'C++', 'Java', 'Haskell', 'Scheme' ]
console.log(languages2); // [ 'Smalltalk', 'C++', 'Java', 'Haskell', 'Scheme' ]

console.log(ooLanguages); // [ 'Smalltalk', 'C++', 'Java' ]
console.log(functionalLanguages); // [ 'Haskell', 'Scheme' ]
