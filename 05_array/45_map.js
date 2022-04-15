// Map - forEach

const timeUnits = new Map();
timeUnits.set("second", 1);
timeUnits.set("minutes", 60);
timeUnits.set("hour", 3600);

// espelha o forEach do array, valor primeiro, segundo a chave
timeUnits.forEach((value, key) => {
  console.log(value, key);
});

// 1 second
// 60 minutes
// 3600 hour
