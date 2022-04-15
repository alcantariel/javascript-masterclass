// WeakMap - utilizando como cache

const areas = new WeakMap();

const rectangle1 = {
  x: 10,
  y: 2,
};

const rectangle2 = {
  x: 5,
  y: 3,
};

// se este cálculo fosse um processo pesado
// que iria consumir muito recurso
// e no caso de receber o mesmo objeto
// não ter necessidade de realizar novamente o algoritmo
// sendo possível retornar o resultado armazenado no cache
function calculateArea(rectangle) {
  if (areas.has(rectangle)) {
    console.log("Using cache...");
    return areas.get(rectangle);
  }

  const area = rectangle.x * rectangle.y;
  areas.set(rectangle, area);

  return area;
}

console.log(calculateArea(rectangle1)); // 20
console.log(calculateArea(rectangle2)); // 15

console.log(calculateArea(rectangle1)); // Using cache... 20
console.log(calculateArea(rectangle2)); // Using cache... 15

// assim que os objetos perderem a referência
// eles se tornam elegíveis para o garbage collection
rectangle1 = null;
rectangle2 = null;
