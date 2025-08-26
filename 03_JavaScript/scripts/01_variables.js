
console.log("Hello from the JavaScript File!")

// change color of paragraph
document.getElementById("myPara").style.color = 'blue';


// single line comments

/*
    Multi line
    comment
*/



/*
    VARIABLES IN JAVASCRIPT
     - There is NO TYPE DECLARATION in JS
     - You can place anything (any data type value) in whichever variable you want
*/

/*
    Declare a variable as var, let, or const
        - const -> final variable, can't change the value once it's set
        - var -> global scope, visible outside of the block it's declared in
        - let -> block scope, visible only within the block it was declared in
*/


var a = 5;
let b = 4;

// print and access these values
console.log("------------")
console.log("BEFORE BLOCK:")
console.log("var a = " + a);
console.log("let b = " + b);
console.log("------------")

if(true) {

    var c = 3;
    let d = 2;
    const e = 1;

    console.log("INSIDE BLOCK:")
    console.log("var a = " + a);
    console.log("let b = " + b);
    console.log("var c = " + c);
    console.log("let d = " + d);
    console.log("const e = " + e);
    
    console.log("------------")
}

console.log("INSIDE BLOCK:")
console.log("var a = " + a);
console.log("let b = " + b);
console.log("var c = " + c);
// console.log("let d = " + d);  // will cause error, d is locally scoped in if statement and not visible
// console.log("const e = " + e); // const will also be locally scoped
console.log("------------")




/*
    Javascript allows for these data types:
        - Strings (use "" or '')
        - Numbers (whole numbers, decimal values, NaN, etc.)
        - Booleans (true or false)
        - Object type
        - Null (no value / absence of a value)
        - Undefined (no value was given) (Ex: let num;)
*/

let myVar = "Hello World"; 
console.log("myVar = " + myVar);

myVar = 5.45;
console.log("myVar = " + myVar);

myVar = null;
console.log("myVar = " + myVar);

myVar = undefined;
console.log("myVar = " + myVar);

let myVar2;
console.log("myVar2 = " + myVar2);



// Javascript can be "graceful" when adding values of different data types
// wil translate values to the right data types to do the addition
console.log( "'Hello' + 5 = " + ("Hello" + 5) );
console.log( "true + 5 = " + (true + 5) ); // true -> 1 | 1 + 5 = 6

// NaN -> number type, stands for Not a Number, given when you can't evaluate a calculation to a number
console.log("'Hello' - 5 = " + ("Hello" - 5) )

// 5 + true + "Hello" + 7 * 2
// 5 + true + "Hello" + 14
// 5 + 1 + "Hello" + 14
// 6 + "Hello" + 14
// 6Hello14
console.log( '5 + true + "Hello" + 7 * 2 = ' + (5 + true + "Hello" + 7 * 2) )




// functions -> can be single entities w/o being attached to a class or object
function myFunc(name) {
    console.log("Hello " + name);
}

myFunc("Orquidia")
myFunc("World")
myFunc(5.4)


function mult(a, b) {
    return a * b;
}

console.log( mult(2, 3) );

let ans = mult(3, 5);

console.log(ans)






