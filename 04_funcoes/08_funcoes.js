// arguments

const sum = function () {
  console.log(arguments);
};

sum(); // [Arguments] {}
sum(1, 2, 3); // { '0': 1, '1': 2, '2': 3 }
