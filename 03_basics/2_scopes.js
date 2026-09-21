// var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    var c = 30
    // console.log("INNER: ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Me"

    function two(){
        const website = "FTM"
        console.log(username);
    }

    // console.log(website);

    two()

}
// one()

if (true) {
    const username = "Memes"

    if (username === "Memes") {
        const website = " YouTube"
        // console.log(username + website);
        
    }
    // console.log(website);
}

// console.log(website);
// console.log(username)

// ++++++++++++++++++++++ Interesting ++++++++++++++++++++++


// console.log(addOne(5));
function addOne(num){
    return num + 1
}


// addTwo(5)
const addTwo = function(num){
    return num + 2
}



// node 03_basics/2_scopes.js