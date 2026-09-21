const user = {
    username : "Memes" ,
    price : 999 ,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to the website`);
        // console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "Jasoos"
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     let username = "Mr.Mime"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "Mr.Rime"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "Mimy"
    // console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "Physics wala"})


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()


// node 03_basics/3_arrows.js