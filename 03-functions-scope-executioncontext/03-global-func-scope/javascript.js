// alert('Hello');
// console.log(window.innerWidth);
const x = 100;

console.log(x,' in global');


function run() {
    console.log(x,' in function');
    return window.innerHeight;
}

console.log(run());

if (true) {
    console.log(x, ' in block');
}

/*
    x is variable shadowning
*/
function add() {
    const x = 1
    const y = 50;
    console.log(y+x);
}


console.log(add());