// Modules - hoisting

const circle = new CircleDefault(10);
console.log(circle); // Circle { radius: 10 }
console.log(circle.area); // 314.1592

import CircleDefault from "./25_modules_5_default_1.mjs";
