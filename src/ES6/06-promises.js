//asincronismo
const otraFuncion = () => {
    return new Promise((resolve,reject)=>{
        if (false){
            resolve("Holo");
        } else{
            reject("pipipipixd");
        }
    })
}

otraFuncion()
    .then(response => console.log(response)) //puede haber varios then, esto es si llega respuesta xd
    .catch(err => console.log(err)); //si algo sale mal (?)