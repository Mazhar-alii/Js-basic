// const instaUser = new Object()    // Singleton
const instaUser = {}                 // Non-Singleton

instaUser.id = "abc123"
instaUser.name = "Me"
instaUser.isLoggedIn = false

// console.log(instaUser);

const regularUser = {
    email: "some@yahoo.com" ,
    fullname: {
        userfullname: {
            firstname: "Me" ,
            lastname: "mes"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a" , 4: "b"}
const obj3 = {5: "a" , 6: "b"}

// const obj4 = {obj1 , obj2}
// const obj4 = Object.assign( {}, obj1, obj2, obj3)
const obj4 = {...obj1, ...obj2, ...obj3}

// console.log(obj4);

// console.log(Object.keys(instaUser));
// console.log(Object.values(instaUser));
// console.log(Object.entries(instaUser));
// console.log(instaUser.hasOwnProperty('isLoggedIn'));



// node 02_basics/4_objects.js