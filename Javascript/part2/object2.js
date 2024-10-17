const tuser = {
    name : "Prashant",
    email : "p@gmail.com",
    age : 33
}

const sapp = {
    fname : "Pachhi",
    city : "athani",
    isLoggedIn : false
}

// combile 
const ob3 = {tuser,sapp}
/*console.log(ob3);

{
    tuser: { name: 'Prashant', email: 'p@gmail.com', age: 33 },
    sapp: { fname: 'Pachhi', city: 'athani', isLoggedIn: false }
}
*/

//combine two object 
//console.log(Object.assign(tuser,sapp));
// {
//     name: 'Prashant',
//     email: 'p@gmail.com',
//     age: 33,
//     fname: 'Pachhi',
//     city: 'athani',
//     isLoggedIn: false
//   }
// best practice is 
// console.log(Object.assign({},tuser, sapp));

// spred oprator new 

// const ob4 = {...tuser, ...sapp}
// console.log((ob4));
// {
//     name: 'Prashant',
//     email: 'p@gmail.com',
//     age: 33,
//     fname: 'Pachhi',
//     city: 'athani',
//     isLoggedIn: false
//   }


// nested object here 

// const nObject = {
//     name : "Rudved",
//     fullname : {
//         uname: {
//             fname : "Rudved maharaja",
//             lname : "yallatti"
//         }
//     }
// }
// accessing values 
//console.log(nObject.fullname.uname.fname);
//Rudved maharaja


// only prints keys 
//console.log(Object.keys(tuser));
// [ 'name', 'email', 'age' ]

//its print only values
//console.log(Object.values(tuser));
//[ 'Prashant', 'p@gmail.com', 33 ]

// each key values is converted into array
// console.log(Object.entries(tuser));
//[ [ 'name', 'Prashant' ], [ 'email', 'p@gmail.com' ], [ 'age', 33 ] ]


// console.log(tuser.hasOwnProperty('name1'));
//false

//destructor 

const myObject = {
    name : "Prashant",
    lastname : "yallatti",
    email : "p@gmail.com",
    isLoggedIn : false
}

//destructor

const {email} = myObject;
console.log(email)