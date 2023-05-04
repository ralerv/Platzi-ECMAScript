const user = { username: "xd", age: 5400, country: "COCO"}
const {username, ...values} = user; //separamos el username de los demas y estos se quedaron en values xd.
console.log(username);
console.log(values)