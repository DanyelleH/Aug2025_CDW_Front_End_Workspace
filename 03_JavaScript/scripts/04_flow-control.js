/*
    FLOW CONTROL:
        - if-else statements
        - switch cases
        - loops: while, do-while, for, for-in, for-of
*/

// to check multiple conditions, use if-else statements
let num = 0;

if(num < 0) {
    console.log(`${num} is negative`);
}
else if (num === 0) {
    console.log(`${num} is zero`);
}
else {
    console.log(`${num} is positive`);
}

// switch -> look for specific cases / values
switch (num) {
    case 0:
        console.log("num is zero");
        break;
    case 1:
        console.log("num is one");
        break;
    default:
        console.log("num is some other number");
        break;
}




// while vs do-while
// do-while -> always runs at least once

let n = 0;
while( n < 5) {
    console.log(`n = ${n}`);
    n++
}

n = 6;
do {
    console.log(`do while: n = ${n}`);
    n++
} while( n < 5 )




const fruits = ["apples", "oranges", "watermelon", "grapes", "mangos", "blueberries"]

// for loop
for( let i = 0; i < fruits.length; i++) {
    console.log(`For Loop: ${fruits[i]}`);
}

// for-of loop 
for( f of fruits ) {
    console.log(`For Of Loop: ${f}`);
}

// for-in loop: loop through an object
let coins = {
    penny: 1,
    dime: 5,
    nickle: 10,
    quarter: 25
}

for( key in coins ) {
    console.log( `key = ${key} | value = ${ coins[key] }` ); 
}


const products = [
    {
        id: 1,
        name: "chair",
        price: 23.99
    },
    {
        id: 2,
        name: "table",
        price: 123.99
    },
    {
        id: 3,
        name: "lamp",
        price: 10.99,
        type: "floor"
    }
]


// often going to be looping through arrays of objects
for( p of products ) {
    console.log(p);
    console.log(p.name);
}



















