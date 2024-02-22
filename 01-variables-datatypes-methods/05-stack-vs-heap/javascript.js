// these values are stored on the stack
const name = 'John'
const age = 30;

// reference values are stored on the heap
const person = {
    name: 'Bradley',
    age: 40
}

// test outputs
let newName = name;
newName = 'Jonathan'

let newPerson = person;

person.name = 'Someone else'

console.log(name, newName);
console.log(person, newPerson);