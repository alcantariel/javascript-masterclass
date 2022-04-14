// Iteration API - find

const frameworks = [
  {
    name: "React.js",
    stars: 186000,
  },
  {
    name: "Vue.js",
    stars: 194000,
  },
  {
    name: "Svelte",
    stars: 57000,
  },
];

const result = frameworks.find((framework) => framework.name === "Vue.js");
console.log(result); // { name: "Vue.js", stars: 194000 }
