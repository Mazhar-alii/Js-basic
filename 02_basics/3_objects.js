// Singleton

// Object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Me",
    "full name": "Memes ",
    [mySym]: "key1",
    age: 20,
    location: "Mississippi",
    email: "me@google.com",
    isLoggedIn: false,
    lastLoginInDays: ["Monday","Friday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "me@microsoft.com"
// Object.freeze(JsUser)
JsUser.email = "me@meta.com"
// console.log(JsUser["email"])

JsUser.greeting = function(){
    console.log("Hello Js user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


// node 02_basics/3_objects.js