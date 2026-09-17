function sayMyName(){
    console.log("M");
    console.log("A");
    console.log("A");
    console.log("H");
    console.log("I");
}

// sayMyName()

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);   
// }

function addTwoNumbers(num1, num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
}
const result =  addTwoNumbers(2, 3)

// console.log("Result :", result);

// function loginUserMessage(username = "You have not"){
//     if (!username) {
//         console.log("Please enter your username");
//         return
//     }
//     return `${username} logged in`
// }
// console.log(loginUserMessage("Leader"));
// console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(100, 200, 300, 500));

const user = {
    username: "Nothing",
    price: 1999
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
// handleObject({
//     username: "Micheal",
//     price: 200
// })

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));


// node 03_basics/1_functions.js