// Iteration API - map

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

const result = frameworks.map((framework) => framework.name);
console.log(result); // [ 'React.js', 'Vue.js', 'Svelte' ]
