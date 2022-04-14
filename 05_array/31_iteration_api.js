// Iteration API - every

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

const result = frameworks.every((framework) => framework.name.includes("js"));
console.log(result); // false
