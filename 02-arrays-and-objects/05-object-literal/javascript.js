let x;

const person = {
    name: 'John Doe',
    age: 30,
    isAdmin: true,
    address: {
        stree: '123 Main St',
        city: 'Boston',
        state: 'MA'
    },
    hobbies: ['music','sports']

}

x = person.name;
x = person['age']
x = person.address.city;
x = person.hobbies[0]

person.name = 'Jane Doe';
person['isAdmin'] = false;

delete person.age;          // deletes a property
person.hasChildren = true   // adds a property of hasChildren

person.greet = function() {
    console.log(`Hello, my name is ${this.name}`);  // adding a function

}

person.greet();             // accessing the function

/* 
    Don't build code this way, but if you run across it, 
    know you will have to use the bracket syntax to access 
    the properties with spaces in the name

*/
const person2 = {
    'first name': "Brady",
    'last name': 'Tom'
}

x = person2['first name'];

console.log(x);
console.log(person);