// concatenation
let x;
const firstName = 'John';
const age = 31;

x = 'hello my name is ' + firstName + ' and I am ' + age + ' years old'

// template strings
x = `Hello, my name is ${firstName} and I am ${age} years old.`

// string properties and methods
const s = new String('Hello world')

x = s.length
x = typeof x

x = s[1];       // access value by key

// x = s.__proto__ // get a list of prototype methods

x = s.toUpperCase()

x = s.charAt(0);

x = s.indexOf('d')

x = s.substring(7)          // takes the rest of the string @7

x = s.slice(0,5);

x = s.slice(-11)
x = s.slice(-6)

x = '        hello world again';
x = x.trim()

x = s.includes('hello')

x = s.split(' ')        // split into an array of words
x = s.split('')         // split into an array of letters

console.log(x);