//Numbers

const score = 400
// console.log(score);

const newScore = new Number(100)
// console.log(newScore);

// console.log(newScore.toFixed(2)); to give values after .dot

const otherValue = 123.8567
//console.log(otherValue.toPrecision(3)) //it make to precise(marked by exactness and accuracy) value

//console.log(otherValue)

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN')); //convert to Indian value

//+++++++++++++++++++++++ Maths +++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2)); //for top or highest number
// console.log(Math.floor(4.9)); //for lowest number
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); //gives value always in between 0 to 1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);