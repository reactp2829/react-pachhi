let a = 10;
const b = 20;
var c = 300

if(true){
    let a =100
    const b = 200
    var c = 30
    var c ='prasjant'
}
// console.log(c);
// console.log(c)


function one(){
    const uname = "prashant"
    function two (){
        const website = "youtube"
        console.log(uname);
    }
    //console.log(website);
    two()
    console.log("two",two())
}

one()
console.log("one",one())

/**  output 
prashant
prashant
two undefined
prashant
prashant
two undefined
one undefined
**/