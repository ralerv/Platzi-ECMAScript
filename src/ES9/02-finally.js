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
    .then(response => console.log(response)) 
    .catch(err => console.log(err)) //el error
    .finally(()=> console.log("terminao :S")); //se termina asi haya error no non