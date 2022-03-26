// string - performance

let counter = 0;

console.time("performance");

while (counter < 100000) {
  // o tempo varia dependendo do tipo do pc

  ("JavaSript"); // 1.9ms

  // new String("JavaSript"); // 4.5ms

  counter++;
}

console.timeEnd("performance");
