const name = "Maz"
const age = 20

// // console.log(name + age + " is Me");

console.log(`Hello myself ${name} and I'm ${age} years old`)

const gameName = new String('He-man')

console.log(gameName[0])
console.log(gameName.__proto__);

console.log(gameName.length)
console.log(gameName.toUpperCase())

console.log(gameName.charAt(3))
console.log(gameName.indexOf('m'))

const newString = gameName.substring(0 , 4)
console.log(newString);

const anotherString = gameName.slice(-5 , 4)
console.log(anotherString);

const anotherNewString = "    abcd    "
console.log(anotherNewString);
console.log(anotherNewString.trim());

const url = "https://limellight.com/lime%20llight"
console.log(url.replace('%20' , '-'));
console.log(url.includes('lime'))

console.log(gameName.split('-'));



//  node 01_basics/5_strings.js