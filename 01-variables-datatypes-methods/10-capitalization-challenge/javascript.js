// capitablization challenge
const originalWord = 'something'

let newWord;

// capitalize the first letter
// solution 1
newWord = originalWord.charAt(0).toUpperCase() + originalWord.substring(1)

// solution 2
newWord = originalWord[0].toUpperCase() + originalWord.substring(1)

// solution 3 with template literals
newWord = `${originalWord.slice(0,1).toUpperCase()}${originalWord.substring(1)}`


console.log(`Original word: ${originalWord}`);
console.log(`New word ${newWord}`);