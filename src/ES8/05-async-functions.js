const fnAsync = () =>{
    return new Promise((resolve, reject) =>{
    (true) //if true? :else
    ? setTimeout (()=> resolve("Asyyyyyync xd"),2000)
    : reject(new Error("pues un error :("));
    })
}

const anotherFn = async () =>{
    const algo = await fnAsync();
    console.log(algo)
    console.log("xd")
}

console.log("Antes");
anotherFn()
console.log("Después");

// “async-await” es una manera de trabajar de una forma mas cómoda con promesas, la palabra reservada “async” quiere decir que una función siempre devolverá una promesa. Ahora la palabra reservada “await”, solamente existe dentro de una función “async”, que hace que JavaScript espere hasta que la función promesa responda para continuar con el código dentro de ésta función, pero sin pausar la ejecución del siguiente código.