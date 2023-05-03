let numbers = [1,2,3,4,5,6,7,8,9];
console.log(numbers.includes(10))
console.log(numbers.includes(5))

const list = ["xd","a","b"];
console.log(list.includes("d")) //sensible a las mayusculas y minisculas.

// Includes, pero en objetos
//🔗 En objetos también existen formas para saber si existe una propiedad. Estos son:

//La palabra reservada in
//El método de objetos hasOwnProperty
//El método Object.hasOwn, que recibe el objeto y la propiedad a evaluar.
// const letras = { a: 1, b: 2, c: 3 }

// "a" in letras // true
// letras.hasOwnProperty("a") // true
// Object.hasOwn(letras, "a") // true
// .
// Se diferencian en que in evalúa todas las propiedades del objeto y del prototipo.
// .
// El método hasOwnProperty evalúa solamente las propiedades del objeto. Sin embargo puede que colisione con alguna otra propiedad en el prototipo, por lo que la última versión de ECMAScript lanzó Object.hasOwn y se recomienda utilizar este si el navegador en el que trabajas lo soporta: Can I use?.

// const letras = { a: 1, b: 2, c: 3 }

// "toString" in letras // true
// letras.hasOwnProperty("toString") // false
// Object.hasOwn(letras, "toString") // false