function getName (){
    console.log('hello prashant')
}

// console.log(getName()) //hello prashant
const result = getName()
//console.log(`Result is ${result} `); //Result is undefined

function Add (n1, n2){
    return n1 + n2
}
// const rl = Add("a",4) // a4
const rl = Add('',6)
// console.log(rl);//4

function isLoggedin (username){
    return (`${username} is loggedin`)
}
const rr = isLoggedin()
// console.log(rr); //undefined is loggedin


//spread 

function getNumbers(...num1){
    return num1
}
// console.log(getNumbers(3,3,4,5,6,7));

// pass object 

function getUser(getObj){
    return (`username is ${getObj.username}`)
}
console.log(getUser({
    username:"prashant"
}))

// pass array 

function arrayValue (myValue){
    return myValue[2]
}
console.log(arrayValue([2,3,46,55,]));


