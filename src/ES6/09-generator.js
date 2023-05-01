function* iterate(array){
    for (let value of array){
        yield value;
    }
    return "terminado";
}

const it = iterate(["ana","bes","queso","xd","lul"]);
console.log(it.next());
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next());
console.log(it.next());
console.log(it.next());