// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    var chars = {};
    for(let char of str){
        chars[char] = chars[char]+ 1 || 1; 
    }
    //console.log(chars);
    var max = 0;
    var maxChar;
    for (let char in chars){
        //console.log(chars[i]);
        if (max < chars[char]){
            max = chars[char];
            maxChar = char;
        }
    }
    //const key = Object.keys(chars).find(key => chars[key] === max);
    return maxChar;
}

//maxChar('abcccccddddsdd');

module.exports = maxChar;
