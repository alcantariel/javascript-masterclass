// template literal - concatenação de strings comum

let host = "localhost";
let port = 3000;
let resource = "users";
let url = "https://" + host + ":" + port + "/" + resource;

console.log(url); // https://localhost:3000/users
