// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    // var reverse = '';
    // var i;
    // for (i=str.length-1; i>=0;i--){
    //     reverse = reverse+str[i];
    // }
    // if (reverse == str){
    //     return true;
    // }
    // else{
    //     return false
    // }
    return str.split('').every((char,i)=>{
        return char === str[str.length - i -1];
    });
}

module.exports = palindrome;
