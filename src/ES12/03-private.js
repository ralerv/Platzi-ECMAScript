class AAAuser{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    #speak(){ //método privado solo se puede acceder de la misma clase con #
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