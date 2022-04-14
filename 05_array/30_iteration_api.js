// Iteration API - some

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

const result = frameworks.some((framework) => framework.name.includes("js"));
console.log(result); // true
