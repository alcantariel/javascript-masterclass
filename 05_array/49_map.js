// Map - clear

const timeUnits = new Map();
timeUnits.set("second", 1);
timeUnits.set("minutes", 60);
timeUnits.set("hour", 3600);

console.log(timeUnits); // Map(3) { 'second' => 1, 'minutes' => 60, 'hour' => 3600 }

timeUnits.clear();

console.log(timeUnits); // Map(0) {}
