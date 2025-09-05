// two ways to crate object 1) literal, 2) constructor

// singleton
// Object.create // known as constructor method

// object literals

// how to declare symbol
const mySym = Symbol("Key1");

const JsUser = {
    name: "Rahul",
    "full name": "Rahul K Gupta",
    age: "30",
    [mySym]: "myKey99",
    location: "Kolkata",
    email: "rahul@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//ways to declare object
// console.log(JsUser.name);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
//console.log(JsUser[mySym]); //define a symbol dataType


JsUser.email = "rahul@chatgpt.com" // to change the key value
//Object.freeze(JsUser); // to freeze the object and values
JsUser.email = "rahul@microsoft.com";

// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
