// Working with Numbers
let x;

const num = new Number(155.4259);

x = num.toString();

x = num.toFixed(2);

x = num.toPrecision(3);

x = num.toLocaleString('en-US');

x = Number.MAX_SAFE_INTEGER;
x = Number.MIN_SAFE_INTEGER;

console.log(num, typeof num);
console.log(x,typeof x);