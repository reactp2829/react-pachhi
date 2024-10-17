const mySymbol = Symbol("key1")

const jsUser = {
    name : "prashant",
    "full name" : "prashant yallatti",
    age : 30,
    isLoggedin  : false,
    city : "Athani",
    [mySymbol] : "sykey1",
    myArray : [2,4,6]
}
//console.log(jsUser["full name"])
//console.log(jsUser[mySymbol])
// overrite age value
jsUser.age = 33
//console.log(jsUser)

//freez jsuser
//Object.freeze(jsUser)
// can't be modified object 
jsUser.age = 44
//console.log(jsUser)

jsUser.getCurrency = function (){
    console.log("currency method")
}
//console.log(jsUser.getCurrency())

// another method here 

jsUser.getName = function(){
    console.log(`my name is ${jsUser["full name"]}`)
}
console.log(jsUser.getName());