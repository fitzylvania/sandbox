/*
    ARROW FUNCTIONS
    Introduced with EC6
    Have some benefits:
    - more compact
    - implicit return
    - lexical scope
*/

// standard function syntax
function add(a,b) {
    return a + b;
}

// arrow syntax
const addArrow = (a,b) => {
    return a+b;
}

// Implicit return
const subtract = (a,b) => a-b;

// can leave off parathensis when only one parameter
const double = a => a * 2;

// Returning an object - put () around the {}
const createObj = () => ({
    name: 'Brad'
});

const numbers = [1,2,3,4,5,6]

numbers.forEach(function (n) {
    console.log(n);
})

numbers.forEach(n => console.log(n));

console.log(add(1,2));
console.log(addArrow(1,2));
console.log(subtract(1,2));
console.log(double(2));
console.log(createObj());