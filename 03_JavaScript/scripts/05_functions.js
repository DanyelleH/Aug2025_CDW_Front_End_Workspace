/*
    FUNCTIONS:
        - declaring functions
        - calling functions
        - arrow functions (lambda)
        - callbacks
*/ 


// Declare a function -> function keyword
function sayHello() {
    console.log("Hello");
}

// invoke a function (call a function)
// call a function by its name + ()
sayHello()

// create a function by storing it in a variable
const sayHi = function() {
    console.log("Hi");
}

sayHi()

// still pass arguments like before
const addValues = function(a, b, c) {
    return a + b + c;
}

console.log(addValues(2, 5, 9));





/*
    - ES6 introduced the arrow function syntax
    - arrow syntax (lambdas) is the same as using the function keyword
    - arrow functions take up less space than functions created by using the function keyword and are faster
    - syntax: () => {}
              (args) => { function body }
*/

// arrow function w/o args
const greeting = () => {
    console.log("Hello! How are you?");
}

greeting()


// arrow function w/ args
const mult = (a, b) => {
    return a * b;
}

console.log("4 x 8 = " + mult(4, 8));

// if your function ONLY returns a value, you DON'T need to use the return keyword or {} brackets
const mult2 = (a, b) => a * b;

console.log("4 x 8 = " + mult2(4, 8));


// if you have one argument, no need for parenthesis 
const print = x => {
    console.log(x)
}

print("Hello")
print(3.45)


const square = x => x * x;
print(square(4))





// CALLBACKS -> a function that is called / executed within another function
//           -> pass a function as an argument to another function

// set up two simple functions...
const sum = (a, b) => a + b;
const sub = (a, b) => a - b;

// ...now set up a function that accept a function as an argument...
const calcPrint = (a, b, calc) => {
    console.log("num1 = " + a);
    console.log("num2 = " + b);
    console.log("Calc Results: " + calc(a, b));
}

// ..now we can use the calcPrint function to display information for different calculations
calcPrint(7, 4, sum)
calcPrint(12, -6, sub)


/*
    How are callbacks and arrow functions often used?
        - sum() and sub() could be functions that can be used elsewhere besides in a callback with calcPrint()
        - however, you may need to create a function that finds the average of two numbers and pass it to calcPrint()
            - but will only be used once
            - so there's no point in storing that average function
        - we can create an arrow function and just pass it to calcPrint() w/o storing it
*/

// simple arrow function to create the callback funtion as I'm invoking calcPrint
console.log("---------");
calcPrint(7, 8, (a, b) => (a * b) / 2 )


console.log("---------");

calcPrint(2, 4, (a, b) => {
    console.log("Hello");
    return a + b + 100;
})


const temp = () => {
    print("hello")
    print("hello")
    print("hello")
    print("hello")

    // more code here

    calcPrint(2, 4, (a, b) => {
        console.log("Hello");
        return a + b + 100;     
    })
}

temp();



