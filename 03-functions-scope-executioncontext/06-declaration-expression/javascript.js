// addDollarSign can be referenced because it uses a function declaration and
// therefore the function is "hoisted" before code execution
console.log(addDollarSign(200));
// Function Declaration
function  addDollarSign(value) {
    return '$' + value;
}

// addPlusSign is not hoisted since it is declared as part of a variable
// console.log(addPlusSign(200));

// Function Expression
const addPlusSign = function(value) {
    return "+" + value;
};

// addPlusSign must be referenced after the function expression
console.log(addPlusSign(200));