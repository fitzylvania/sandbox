/*
    user variable is defined with the function scope, and 
    not available outside of the function

    user = 'Bot' is the way to define the default, introduced after 2015
*/
function registerUser(user = 'Bot') {
 /*
    method of defining a default prior to 2015.  
    if (!user) {
        user = 'Bot'
    }
*/
    return user + ' is registered.'
}

console.log(registerUser());

// Rest parameters
function sum(...numbers) {
    let total = 0;

    for (const num of numbers) {
        total += num;
    }
    return total;
}

console.log(sum(1,2,3,4));

// Objects as parameters
function loginUser(user) {

    return `The user ${user.name} with id of ${user.id} is logged in.`
}

const user = {
    id: 1,
    name: 'David'
}

console.log(loginUser(user));

console.log(
    loginUser({
        id: 2,
        name: 'Sarah'
    })
);

// Arrays
function getRandom(...funcArray) {
    const randomIndex = Math.floor(Math.random() * funcArray.length) ;
    return funcArray[randomIndex];
}

console.log(getRandom(1,3,4,5,6,7,8,9));