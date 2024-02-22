const arr = [25, 15, 55, 16];
let x;

// changing the value of elements

arr.push(100);      // add to the end of the arry
arr.pop();          // removed from the end of the array
arr.unshift(99);    // add to the beginning of the array
// x = arr.shift()         // removes the beginning element of the array
arr.reverse();      // reverses the elements of the array

// getting something from the array
//
x = arr.includes(25);
x = arr.indexOf(55);
// x = arr.slice(2,3);
// x = arr.splice(2,1)
x = arr.splice(1,4).reverse().toString();


console.log(arr);
console.log(x);


