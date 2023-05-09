const regex = /\b(Apple)+\b/g

const fruit = "Apple, baanaaaa, okowo, Apple, orangi, etc, etc, ect";

for (const match of fruit.matchAll(regex)){
    console.log(match)
}