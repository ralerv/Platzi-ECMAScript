import fetch from "node-fetch";

const response = await fetch("https://api.escuelajs.co/api/v1/products")
const products = await response.json(); //mu importante el await

export {products};

//top level await no uso de async :D