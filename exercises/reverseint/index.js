// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    var reversed = '';
    var unique = '';
    //console.log(Math.sign(n));
    var str = n.toString();
    for (let character of str){
        reversed = character + reversed;
        
    }
    return(parseInt(unique+reversed)*Math.sign(n));
}

//reverseInt(-91);

module.exports = reverseInt;
