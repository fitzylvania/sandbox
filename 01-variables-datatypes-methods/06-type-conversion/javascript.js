// changing strings to numbers

// let amount = '100';

// amount = parseInt(amount)    // method
// amount = +amount;            // Unary operator
// amount = Number(amount)      // Number constructor

// console.log(amount, typeof amount);

// changing numbers to string
// let amount =  '99.5';

// amount = amount.toString();     // method, function attached to object
// amount = String(amount);            // String constructor
// amount = parseFloat(amount)         // method - use parseFloat to retain decimal positions

// Boolean
// let amount = 1;                     // all values but 0 are true
// amount = Boolean(amount)            // Boolean constructore

// invalid
let amount = 'Hello';

amount = parseInt(amount)               // NaN

console.log(amount, typeof amount);