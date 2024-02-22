// primitive data types
/*
    String - sequence of characters.  Must be in quotes or backticks
    Number - integers and floating point numbers
    Boolean - logicl entity, either true or false
    Null - intentional absence of an object value
    Undefined - a variable which has not been assigned
    Symbol - built-in object who's constructor returns a unique symbol
    BigInt - really large numbers that the number type can't handle

*/

/*
    Reference Types (Objects)

    Reference types, or "objects", are non-primative value and when assigned to a variable, 
    the variables is given a reference to that value.

    Object literals, arrays, and functoins are all reference types


*/

/* 
    JavaScript is a dynamically typed language
*/

// string
const firstName = 'Sally'

// number
const age = 30;
const temp = 98.9;

// Boolean
const hasKids = true;

/*
    null
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null
*/
const apartmentNum = null;

// Undefined
let score;

// Symbol
const id = Symbol('id')

// BigInt
const n = 99999999999999999n

// Reference Types
const numbers = [1,2,3,4,5,6]   // arrays

const person = {
    name: 'Brad'                // objects
}

function sayHello(){
    console.log('Hello');       // functions
}

// output
const output = sayHello;

console.log(output, typeof output);

/*
    Primitive Types: stored in "stack", where it is accessed
    string | number | null | undefined | BigInt | Symbol

    Reference Types: stored in "heap" and accessed by reference
    arrays | functions | objects
*/


