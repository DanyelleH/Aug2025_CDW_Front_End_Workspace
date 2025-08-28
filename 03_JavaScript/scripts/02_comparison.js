/*
    COVERING:
        - Truthy vs Falsey
        - difference between == vs ===
        - transpilation
*/


let condition = false;

// booleans work as you would expect in JS
if(condition) {
    console.log("Condition is true");
}
else {
    console.log("Condition is false");
}

// 5 is not necessarily equal to true, it is evaluated as true within a condition in JS
if(5) {
    console.log("5 is true");
}
else {
    console.log("5 is false");
}


/*
    - Truthy and Falsey are values that will evaluate to true/false in condition even though they are not booleans

    - These values ARE NOT EQUAL true and false

    - Values evaluate:
        - Falsey -> 0, NaN, false, Undefined, null, empty string ""
        - Truthy -> everything else
*/

let myVal = "";

if(myVal) {
    console.log(myVal + " is a Truthy");
}
else {
    console.log(myVal + " is a Falsey");
}



// null evalutates to false when it comes to Truthy/Falsey, but IS NOT EQUAL TO false
if(null == false) {
    console.log("null == false");
}
else {
    console.log("null != false");
}

// transpilation -> JS "translate" a value to fit the data type of whatever evaluation/comparison you're making
console.log("5 + true = " + (5 + true)); // 5 + 1 = 6


// 5 = "5"
// 5 == 5  <-- translates string five to numeric five
// true
if(5 == "5") {
    console.log(" 5 == '5' ");
}
else {
    console.log(" 5 != '5' ");
}


// "" == 0
// "" == ""  <-- translate zero to empty string
// true
if("" == 0) {
    console.log("'' == 0");
}
else {
    console.log("'' != 0");
}


// What is the difference between == and === in JS?
// ==  -> compare the value
// === -> compare the value and data type

// if using ===, the FIRST thing that will be checked, is the data type
// if data types are not the same, will evaluate as not equal
// if data types the same, THEN it will compare the value
if(5 === "5") {
    console.log(" 5 === '5' ");
}
else {
    console.log(" 5 !== '5' ");
}

// !== --> NOT EQUAL that also checks data type first
if("" !== 0) {
    console.log("'' !== 0");
}
else {
    console.log("'' === 0");
}




