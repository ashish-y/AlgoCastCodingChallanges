// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    var reversestr='';
    var i;
    for (i=str.length-1; i>=0;i--){
        reversestr = reversestr+str[i];
    }
    return reversestr
}

module.exports = reverse;
