let x;

// step 1
const library = [ {
        title: 'First Book',
        author: 'Garnder',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: 'Second Book',
        author: 'JJ Martin',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: 'Third Book',
        author: 'someone new',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
];

// step 2
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

// step 3 destructure title of first book into firstBook 
const { title: firstBook } = library[0];

x = firstBook;

console.log(x);
console.log(library);

// step 4 turn library into JSON structure
const libraryJSON = JSON.stringify(library);

console.log(libraryJSON);