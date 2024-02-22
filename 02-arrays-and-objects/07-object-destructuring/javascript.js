let x;

const firstName = 'John';
const age = 30;
const lastName = 'Doe';

const person = {
    firstName: firstName,
    lastName: lastName,
    age: age
}

x = person;

// is the same as this (when property and variable are the same name)
const person2 = {
    firstName,
    lastName,
    age
}

x= person2.age;

// Destructuring
const todo = {
    id: 1,
    title: 'Take out trash',
    user: {
        name: 'Jane'
    }
}

x = todo

// const { id, title, user} = todo;        // without renaming
const { id: todoID,user} = todo;        // with renaming
console.log(todoID);

console.log(x);

// destructuring arrays
const numbers = [1,2,3,4,5];
const [first, second,...rest] = numbers;
console.log(first, second, rest);