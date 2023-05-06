const promise1 = new Promise((resolve,reject)=> reject("rechazadore"));
const promise2 = new Promise((resolve,reject)=> resolve("resueltou"));
const promise3 = new Promise((resolve,reject)=> resolve("resueltou 2: la venganza"));

Promise.allSettled([promise1,promise2,promise3])
    .then(response => console.log(response))
    .catch(reject => console.log(reject))