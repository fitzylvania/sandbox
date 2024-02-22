let x;

// const todo = {};               // creating the object with object literal
const todo = new Object();        // creating the object with object constructor

todo.id = 1;
todo.name = 'Buy milk';
todo.completed = false;

x = todo;

const person = {
    address: {
        coords: {
            lat: 42.1345,
            lng: -71.2121
        }
    }
}

x = person.address.coords.lat;

const obj1 = {a:1, b:2};
const obj2 = {c:3, d:4};
const obj3 = {obj1,obj2};           // embedds the two arrays in two indexes of obj3
const obj4 = {...obj1, ...obj2};     // flattens the two arrays into a single array
const obj5 = Object.assign({},obj1,obj2,obj3) // syntax before ...spread came out

const todos = [
    {id:1, name: 'Buy Milk'},
    {id:2, name: 'Pickup kids from school'},
    {id:3, name: 'Take out trash'}
]

x = todos[0].name;

x = Object.keys(todo)

x = Object.keys(todo).length;

x = Object.values(todo);
x = Object.values(todo).length;

x = Object.entries(todo);

x = todo.hasOwnProperty('name');
x = todo.hasOwnProperty('somethingMadeUp');


console.log(x);