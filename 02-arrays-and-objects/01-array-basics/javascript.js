let x;

// array literal
const numbers = [19, 35, 45, 29 , 39, 105];
const mixed = [19,'orange',true, null]

// array constructor
const fruits = new Array('apple','orange','grape');

x = fruits[1]
x = numbers[0] + numbers[3];
x = `${numbers[0]+numbers[3]}`;
x = `My favorite fruit is ${fruits[1]}`;

x = numbers.length;

fruits[2] = 'pear'
x = fruits;

// fruits.length = 2;

fruits[3] = 'strawberry';
fruits[fruits.length] = 'grapefruit'

console.log(numbers,typeof numbers);
console.log(x, typeof x);

