// Dates

// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);
//typeof date is object

// let myCreateDate = new Date(2025, 0, 28)
// console.log(myCreateDate.toDateString());

// let myCreateDate = new Date("09-04-2025")
// console.log(myCreateDate.toLocaleString());

// let myTime = Date.now()

// console.log(myTime);

let newDate =   new Date()
// console.log(newDate.getMonth());

newDate.toLocaleString('default', {
    weekday: 'short',
})
console.log(newDate);