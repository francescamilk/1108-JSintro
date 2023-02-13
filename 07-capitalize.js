// Input:  a String
// Output: the String capitalized

const capitalize = (string) => {
    // 1. access the first character  > upcase
    let firstLetter = string[0].toUpperCase();
    // 2. access the rest of the word > lowercase
    let restOfWord = string.substring(1).toLowerCase();
    
    return `${firstLetter}${restOfWord}`;
}

let testString = 'francescA';
console.log(capitalize(testString));
