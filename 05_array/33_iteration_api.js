// Iteration API - reduce

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

const totalStars = frameworks.reduce(function (total, framework) {
  return total + framework.stars;
}, 0);
console.log(totalStars); // 437000
