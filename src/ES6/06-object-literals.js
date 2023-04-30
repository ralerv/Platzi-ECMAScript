//enhaced object literals
//antes
function newUser(user,age,country,uID){
    return{
        user,
        age,
        country,
        id:uID,
    }
}

console.log(newUser("a",2,"mx",1010))