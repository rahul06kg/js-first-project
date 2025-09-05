// array

const myArr = [0, 1, 2, 3, 4, 5]
const newArr = ["Shaktiman", "Nagraj"]
const myArr2 = new Array(1, 2, 3, 4)

//console.log(myArr[0]);

// Array methods
myArr.push(6) //push is to add at last
myArr.push(7)
myArr.pop() //delete/remove from last no argument needed
myArr.unshift(9) //to add in first place
myArr.shift() //to add in first place no argument needed

//console.log(myArr);

// slice , splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(-1, 1);
console.log(myn2);
console.log("C ", myArr);
