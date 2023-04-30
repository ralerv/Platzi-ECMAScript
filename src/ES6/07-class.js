
//declarando
class UserAntiwo {}

//instancia de una clase
//const newUser = new User();

class User {
    //metodos - parecido a funciones xd
    greetings(){return "Hello"};
}

const holo = new User(); //instancia de la clase
console.log(holo.greetings()); //acceder a un metodo

const a = new User();
console.log(a.greetings());

//constructor

class UserNuevo {
    constructor(){ //donde inicializamos elementos de una clase ¿?
        console.log("Soy un constructor uwu")
    }
    saludar(){
        return "holas xd";
    }
}

const ddeded = new UserNuevo(); //el new trae el constructor


/////THIS

class OtroUser {
    constructor(name){ //La palabra reservada ‘new’, es un constructor, que sirve para crear objetos personalizados.
        this.name = name;
    }
    speak(){
        return "Hola";
    }
    saludado(){
        return `${this.speak()} ${this.name}`;
    }
}

const ANA = new OtroUser("ana");
console.log(ANA.speak(), ANA.saludado())

//setters getters

class AAAuser{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    speak(){
        return "xd";
    }
    saludar(){
        return `${this.speak()} ${this.name}`
    }

    get uAge(){ //crear una nueva propiedad del constructor o algo así
        return this.age;
    }

    set uAge(n){ //cambiar valores del constructor ¿?
        this.age = n;
    }
}

const bebebeb = new AAAuser("lol",200005);
console.log(bebebeb.uAge);
console.log(bebebeb.uAge = 20);