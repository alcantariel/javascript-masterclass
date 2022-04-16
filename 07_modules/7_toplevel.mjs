// Modules - top level

// An import declaration can only be used at the top level of a module

function fn1() {
  import CircleDefault from "./5_default_1.mjs";

  const circle = new CircleDefault(10);
  console.log(circle); // Circle { radius: 10 }
  console.log(circle.area); // 314.1592
}

fn1();
