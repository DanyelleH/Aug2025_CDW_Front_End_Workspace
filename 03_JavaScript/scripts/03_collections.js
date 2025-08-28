/*
    What we need to know about collections in JS:
        - arrays
        - objects (json)
        - spread operator
*/

// ARRAYS
// JS arrays are declared using [] brackets, not of a fixed size

// when you're working with collections, declare them as const
// as you don't want to replace an entire collect by reassigning the variable it's stored in

const numArr = [1, 2, 3, 4];

console.log("numArr = " + numArr);
console.log(numArr);

// arr[index] -> element on that index
console.log("numArr[0] = " + numArr[0]);

// arrays don't strickly store one data type
numArr[0] = "Hello";
console.log(numArr);

// looping through array
for(let i = 0; i < numArr.length; i++) {
    // `` => write string and use ${} in order to insert and interpret values
    console.log(`numArr[${i}] = ${numArr[i]}`);
}


const fruitArr = ["apple", "orange", "banana", "strawberry", "melon"];
console.log(fruitArr);

// push() -> add an element to the end of an array
fruitArr.push("mango");
console.log(fruitArr);


// splice() -> remove one or more elements from an array
// splice( starting index, number of elements to delete )
fruitArr.splice(1, 1);
console.log(fruitArr);

// splice() -> also adding elements in the middle of an array
// splice( starting index, number of elements to delete, elements to add )
fruitArr.splice(2, 0, "watermelon");
console.log(fruitArr);

fruitArr.splice(2, 0, "kiwi", "blue berries");
console.log(fruitArr);

// if we just add in an array, will put the array in index 2 and not the values (will need to use the spread operator)
// fruitArr.splice(2, 0, ["kiwi", "blue berries"]);
// console.log(fruitArr);

// sort() -> sort by ascending value
fruitArr.sort();
console.log(fruitArr);



/*
    SPREAD OPERATOR:
        - used to combine two arrays into a new array with all the elements from the original arrays
        - spreads out and extracts elements from an array to be placed in another array
*/

const foodArr = ["chips", "juice", "eggs"]

// create a 2D array
const groceries = [ foodArr, fruitArr ];
console.log(groceries);


const groceries2 = [ ...foodArr, ...fruitArr ]
console.log(groceries2);

fruitArr.splice(2, 0, ...["raspberries", "tangerines"])
console.log(fruitArr);





/*
    JSON -> JavaScript Object Notation
         -> objects are created without the need for a class
         -> objects are declared with {} brackets
         -> made up of key-value pairs
         -> keys are declared as strings or raw values
         -> values can be anything (strings, numbers, functions, another object, arrays, etc.)
         -> want to access values through their keys
*/


const person = {
    name: "Orquidia",
    id: 1234,
    "hairColor": "brown",
    favoriteColors: [ "red", "black", "yellow" ],
    hello: function() {
        console.log("Hello!");
    },
    address: {
        street: "1 Main St",
        city: "New York",
        state: "NY",
        zip: "12345"
    }
}

console.log(person);

// access values in object
console.log( person.name );
console.log( person.favoriteColors );
console.log( person.favoriteColors[0] );
console.log( person.address );
console.log( person.address.street );

// can also accesss values this way
console.log( person["name"] );

// add more key-value pairs
person.eyeColor = "brown"
person["occupation"] = "Full Stack Developer"
console.log(person);

// reassign values
person.eyeColor = "green"
console.log(person);

// call function
person.hello()



// spread operator will work with objects too
const words = { word: "Hello" }
const numbers = { num: 1 }

const newObj = { ...words, ...numbers }
console.log(newObj);








