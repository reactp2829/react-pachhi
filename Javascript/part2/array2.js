let array1 = [1,2,3,4]
let array2 = [4,5,6]

// add 

//array1.push(array2)
//console.log(array1)

// need to concatinate 

//combined into one array
//const newarray = array1.concat(array2)
//console.log(newarray);

// const  spredarray = [...array1, ...array2]
// console.log(spredarray)

//check array 

//console.log(Array.isArray("prashant"))

//console.log(Array.from("prashant")) // converted into array

//console.log(Array.of("Rudved"))

const sc1 = 100
const sc3 = 200 
const sc4 = 300
//console.log(Array.of(sc1,sc3,sc4)); // varible into converted into array


const arra1 = [1,2,3,4,5]
const arra2 = [6,7,8,['pras',true,9,[10,11,12,'dd']],13]

const result = arra2.flat(Infinity)
console.log(result)
//
[
    6,      7,    8,
    'pras', true, 9,
    10,     11,   12,
    'dd',   13
  ]