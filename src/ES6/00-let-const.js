var lastName = "David"; // inicilizar y declarar ¿?
lastName = "Dedo xd"; //reasignar
console.log(lastName)

let fruit = "Apple";
fruit = "uwuwuw"; // let si es reasignable
console.log(fruit);

const animal = "dog";
animal = "AAAAA"; // const no es reasignable
console.log(animal);

const fruits = () => {
    if (true) {
        var fruit1 = "Apol";        //accedible - Function scope (dentro de la funcion)
        let fruit2 = "kowo";        //no se puede acceder - Block Scope
        const fruit3 = "anannaa";   //no se puede acceder - Block Scope (dentro del if)
    }
    console.log(fruit1,fruit2,fruit3)
}

fruits()