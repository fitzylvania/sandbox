const fruits = ['apple','pear','orange'];
const berries = ['strawberry','blueberries','raspberries'];

// fruits.push(berries);   // nesting an array within an array

let x;

// x = fruits[3][1];

const allFruits = [fruits,berries];

x = fruits.concat(berries);

// spread operator (...)
x = [...fruits,...berries];

// flatten arrays
const arr = [1, 2,[3,4],5,[6,7],8]
x = arr.flat();

// static methods on array object
x = Array.isArray(fruits);          // returns true
x = Array.isArray('hello');         // returns false
x = Array.from('12345');            // takes the value and returns an array of elements

const a = 1;
const b = 2;
const c = 3;

x = Array.of(a,b,c)



console.log(arr);
console.log(x);
// console.log(fruits);
// console.log(berries);
// console.log(allFruits);

