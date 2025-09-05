const indianHeros = ["shaktiman", "aryaman", "juniorg"];
const badHeros = ["jonkjoka", "drjackal", "kilwish"]

// indianHeros.push(badHeros);
// console.log(indianHeros);

const allNewHeros = indianHeros.concat(badHeros); //concat operator
// console.log(allNewHeros);

const spreadNewHeros = [...indianHeros, ...badHeros] //... spread operator to add/spread all array
// console.log(spreadNewHeros)

const another_array = [1, 2, 3, 4, [5, 6, 7], 8, [8, 7], [9, 9]]
const real_array = another_array.flat(Infinity); //flat is to break & merged all arrays in one array
//console.log(real_array)

console.log(Array.isArray("Rahul")) //to find whether is a array or not
console.log(Array.from("Rahul")) //to convert into array
console.log(Array.from({name: "Rahul"})) //interesting

const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1, score2, score3)) //to add all arrays/variables etc.

