const user = {
    username : "prashant",
    email : "p@gmail.com",
    myName : function (){
        console.log(`${this.username} is loggedin`);
        console.log(this)
        //scope context is retured here 
        /*{
            username: 'rudved',
            email: 'p@gmail.com',
            myName: [Function: myName]
        }*/
    }
}
// user.myName()//prashant is loggedin
// user.username = "rudved"
// user.myName() //rudved is loggedin
// console.log(this); // global value is {}

// inside function we cant use the this key word 
function MyValue (){
    const name = "Prashant"
    console.log(`my name is ${this.name}` );
}

//MyValue() // my name is undefined


const Myfun = function(){
    const name = "Prashant"
    console.log(`my name is ${this.name}` );
    console.log(this)// here global object value is returedned 
}
//Myfun() // my name is undefined

///arrow function 

// const arrowFun = ()=>{
//     const name = "Prashant"
//     console.log(this) ; // return {} object
// }
// arrowFun() // {}

// implicity value return 

const addTwo = (n1, n2) =>(n1 + n2)
// console.log(addTwo(5, 10)); // 15

const obj = () => ({username : "Prashant"}) //{ username: 'Prashant' }

console.log(obj());