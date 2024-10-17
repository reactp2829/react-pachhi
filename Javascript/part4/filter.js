// condition based loop 

const myArr = [1,2,3,4,5,6,7,8,9,10]
const newArry = []
myArr.forEach((item)=>{
    if(item>4){
        newArry.push(item)
        // console.log(item);
    }
})
// console.log(newArry);

// instead of righting add these many line we need to use filter 

const value = myArr.filter((item)=>( item > 4) )
// console.log(value);[ 5, 6, 7, 8, 9, 10 ]
const newArry1 = []
const val2 = myArr.forEach((n)=>{
    if(n>3){
        newArry1.push(n)
        // console.log(n);
        return n
    }
})
// console.log('new array ', newArry1);//undefined
// //new array  [
//     4, 5,  6, 7,
//     8, 9, 10
//   ]

//   console.log('new array ', val2);//undefined

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let val3 = books.filter((bk)=>(bk.genre==="Science"))
//   console.log(val3);

let val4 = books.filter((b)=>(b.publish >=2000))
// console.log(val4);

// chaining 

const myArr1 = [1,2,3,4,5,6,7,8,9,10]
const result = myArr1.map((n)=>n+1)
// console.log(result);

const result1 = myArr1
                .map((n)=> (n * 10))
                .map((n1) => n1 +1)
                .filter((n)=> n > 70)

// console.log(result1); //[ 71, 81, 91, 101 ]

//Reduce 
const redArr = [1,2,3]
// const val = redArr.reduce(function(acc,currval){
//     console.log(`acc:${acc} and accumalator val is ${currval}`);
//     return acc + currval
// },0)

// simple
 const val = redArr.reduce((acc, currval)=> acc+currval,0) 

console.log(val);
//op
// acc:0 and accumalator val is 1
// acc:1 and accumalator val is 2
// acc:3 and accumalator val is 3
// 6


// shoping car

const shoppingCart = [
    {
        courseName : "Js  Course",
        price : 2999,
    },
    {
        courseName : "Py  Course",
        price : 999,
    },
    {
        courseName : "Java  Course",
        price : 4999,
    },
    {
        courseName : "DS  Course",
        price : 12999,
    },
]

// calculation 

const totalPrice = shoppingCart.reduce((acc, item)=>(acc + item.price),0)
console.log(totalPrice);//21996