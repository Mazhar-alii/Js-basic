const marvel_heroes = ["Captian America","Iron Man","Spider Man"]
const dc_heroes = ["Super Man","Bat Man","Flash"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1])


// **************** Concat Operator ****************
const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes)


// **************** Spread Operator ****************
const all_my_heroes = [...marvel_heroes , ...dc_heroes]
// console.log(all_my_heroes)


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);


// console.log(Array.isArray("Me"));
// console.log(Array.from("Me"));
// console.log(Array.from({name: "Me"}));

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1, score2, score3));


// node 02_basics/2_arrays.js