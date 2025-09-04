// Primitive
// 7 types: String, Number, Boolean, null, undefined, Symbol, Bigint

// examples
const nameValue = "Rahul" //string
const score = 100 //number
const isLoggedIn = false //boolean
const outsideTemp = null //null
let userName; //undefined

const id = Symbol('123') //symbol
const anotherId = Symbol('123')
// console.log(id === anotherId);

const bigNumber = 244545637874n; //bigint

//console.table([typeof nameValue, typeof score, typeof isLoggedIn, typeof outsideTemp, typeof userName, typeof id, typeof anotherId, typeof bigNumber]);

// ┌──────────────┬────────────┐
// │ dataTypes    │ Return     │
// ├──────────────┼────────────┤
// │ string       │ 'string'   │
// │ number       │ 'number'   │
// │ Boolean      │ 'boolean'  │
// │ null         │ 'object'   │
// │ undefined    │ 'undefined'│
// │ symbol       │ 'symbol'   │
// │ bigint       │ 'bigint'   │
// └──────────────┴────────────┘

// Reference (Non-primitive)
// 3 types: Array, object, Functions
// return types object

const heros = ['Shaktiman', 'Aryaman', 'JuniorG']; //array

let myObj = {               //object
    name: "Rahul",
    age: 30
}

const myFunction = function () {        //function
    console.log("Hello World");    
}

console.table([typeof heros, typeof myObj, typeof myFunction]);

// ┌───────────┬───────────────────┐
// │ dataTypes │ Return            │
// ├───────────┼───────────────────┤
// │ Array     │ 'object'          │
// │ Object    │ 'object'          │
// │ Function  │ 'function object' │
// └───────────┴───────────────────┘