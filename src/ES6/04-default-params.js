function newuser(name,age,country){
    var name = name || "Quesito"; //Cómo antes se ponian valores por defecto, si lo pones LET no funciona xd
    var age = age || 200
    var country = country || "OE"
    console.log(name,age,country)
}

newuser()
newuser("QUESONT", 1, "UWU")

function newAdmin (name = "O", age=5555, country="CL"){ //nueva forma de asignar valores por defecto
    console.log(name,age,country)
}

newAdmin()
newAdmin("A",5,"XD")