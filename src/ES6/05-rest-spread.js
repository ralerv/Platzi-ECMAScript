//expresiones de asignación de deestructuracion xd
//arrays destructuring

let fruits = ["apol","anana"];
let [a,b] = fruits; //a es posicion 0 del array fruits
console.log(a,b);

//object destructuring
let user = {username: "o", age: 23};
let {username,age} = user; //en llaves el mismo valor del objeto xd
console.log(username,age)

// spead operator
let person = {name: "xd",age:2000000};
let country = "MX";

let data = { id:1,  ...person, country } //me va a devolver objet todo unido iuwu
console.log(data)

// rest
function sum(num,...values){
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1,1,2,3,4,5);