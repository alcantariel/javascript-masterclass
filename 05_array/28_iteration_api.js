// Iteration API - filter

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

const resultFilterTrue = frameworks.filter((framework) => true);
console.log(resultFilterTrue);
// [
//   { name: 'React.js', stars: 186000 },
//   { name: 'Vue.js', stars: 194000 },
//   { name: 'Svelte', stars: 57000 }
// ]

const resultFilterStars = frameworks.filter(
  (framework) => framework.stars > 100000
);
console.log(resultFilterStars);
// [
//   { name: 'React.js', stars: 186000 },
//   { name: 'Vue.js', stars: 194000 }
// ]
