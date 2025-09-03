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