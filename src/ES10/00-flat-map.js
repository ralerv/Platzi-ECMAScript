const array = [1,2,3,4,[10,20,30,40,[100,200,300,400]]];
console.log(array.flat(3)) //convierte todo a un array de 1 profundidad xd nosecomodecirlo

//flatmap
const array2 = [1,2,3,4,5];
console.log(array2.flatMap(v => [v,v *2])); //regresa el primer numero y al siguiente su doble