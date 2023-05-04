async function* anotherGenerator (){
    yield await Promise.resolve(1)
    yield await Promise.resolve(50)
    yield await Promise.resolve(3)
}

const other = anotherGenerator();
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));

async function arrays(array){
    for await (let value of array){
        console.log(value);
    }
}

const names = arrays(["q","a","s","o"])
console.log("after")