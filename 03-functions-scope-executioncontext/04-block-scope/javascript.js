const x = 100;

if (true) {
    const y = 200;
    console.log(x + y);
}

// console.log(x + y);

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

if (true) {
    const a = 500;
    let b = 600;
    var c = 700;

}

// var is not block scoped, whereas const and let are
// console.log(a);         // generates undefined
// console.log(b);           // generates undefined
console.log(c);

/*
    but var is function scoped
*/
function run() {
    var d = 800;
    console.log(d);
}

run()

console.log(d);


