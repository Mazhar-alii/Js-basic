// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named iife
    console.log(`DB connected`);
})();

( (name) => {
    // simple iife + parameter use
    console.log(`DB two connected ${name}`);
} )("Memes")



// node 03_basics/4_iife.js