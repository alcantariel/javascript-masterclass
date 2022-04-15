// Map - get

const timeUnits = new Map();
timeUnits.set("second", 1);
timeUnits.set("minutes", 60);
timeUnits.set("hour", 3600);

console.log(timeUnits.get("second")); // 1
console.log(timeUnits.get("minutes")); // 60
console.log(timeUnits.get("hour")); // 3600
console.log(timeUnits.get("day")); // undefined
