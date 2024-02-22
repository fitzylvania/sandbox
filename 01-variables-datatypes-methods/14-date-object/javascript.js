// working with dates and times
let x;

let d = new Date();     // instantiating the Date object into d
console.log(d.getTime());

x = d.toString();       // returns the current date and time
x = d.getTime();        // returns the 
x = d.valueOf();        // returns milliseconds
x = d.getFullYear();    // returns the current four digit year
x = d.getMonth();       // returns the zero based index of the month
x = d.getMonth() + 1;   // returns the calendar month number
x = d.getDate();        // retuns the day of the month
x = d.getDay();         // returns the day of the week
x = d.getHours();       // returns the current hours
x = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`

x = Intl.DateTimeFormat('en-US').format(d);
x = Intl.DateTimeFormat('en-GB').format(d);
x = Intl.DateTimeFormat('default').format(d);

// this is the newer method of formatting date/time information
x = d.toLocaleString('default',{    
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
    })



console.log(x,typeof x);

