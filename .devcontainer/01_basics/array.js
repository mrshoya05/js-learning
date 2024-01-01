// arrays in javascript 
const myArray = [1, 2, 3, 4, 5]

// shallow copies means share the same references...

const myArr2 = new Array(1,2,3,4,5,6,7);

// console.log(myArr2);

// methods of array

myArray.push(22);


myArray.pop() //remove last element of array


myArray.unshift(0) // add an element into first position 

myArray.shift() // remove first element from array 


console.log(myArray.includes(4)); // use to find any existing value in array 

console.log(myArray.indexOf(4));  // use to access perticular index value 

const newArray = myArray.join() // to join 2 array string typeof 

