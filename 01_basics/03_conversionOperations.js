let score = "33";

console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);

// 33 => 33
// 33abc => NaN
// true => 1; false => 0;

let isLoggedIn = "Rahul";
let booleanIsLoggedIn = Boolean(isLoggedIn); //conversion of string to boolean

console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Rahul" => true




/* ********************** operations ********************** */

let value = 3
let negValue = -value
// console.log(negValue);

let str1 = "hello"
let str2 = " Rahul"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

//president operator (++)
let gameCounter = 100;
console.log(++gameCounter); // prefix
console.log(gameCounter++); // postfix


// till video 7