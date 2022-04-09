// herança __proto__

const functionalLanguage = {
  paradigm: "Functional",
};

const scheme = {
  name: "Scheme",
  year: 1975,
  __proto__: functionalLanguage,
};

const javascript = {
  name: "JavaScript",
  year: 1995,
  __proto__: functionalLanguage,
};

console.log(functionalLanguage); // { paradigm: 'Functional' }
console.log(scheme); // { name: 'Scheme', year: 1975 }
console.log(javascript); // { name: 'JavaScript', year: 1995 }

// Não exibe a propriedade paradigm
// O interpretador só exibe as propriedades que estão no próprio objeto
// Mas ao consultar a propriedade diretamente, ela será consultada em seu protótipo
// Se a propriedade não existe no próprio objeto, automaticamente ela é consultada no protótipo acima até encontrar, e se não existe no protótipo acima, apontaria para null, e consequentemente retornaria undefined

console.log(scheme.paradigm); // Functional
console.log(javascript.paradigm); // Functional
