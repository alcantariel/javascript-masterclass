// Map - delete

const timeUnits = new Map();
timeUnits.set("second", 1);
timeUnits.set("minutes", 60);
timeUnits.set("hour", 3600);

console.log(timeUnits); // Map(3) { 'second' => 1, 'minutes' => 60, 'hour' => 3600 }
console.log(timeUnits.size); // 3

const deleted = timeUnits.delete("minutes");
console.log(deleted); // true

console.log(timeUnits); // Map(3) { 'second' => 1, 'hour' => 3600 }
console.log(timeUnits.size); // 2

const invalidDelete = timeUnits.delete("day");
console.log(invalidDelete); // false
