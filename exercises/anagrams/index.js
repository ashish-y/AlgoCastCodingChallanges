// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

    //console.log(stringA.split('').sort().join('') == stringB.split('').sort().join(''));

     var charsA = buildChar(stringA);
     var charsB  = buildChar(stringB);
    //  for(let char of stringA){
    //      charsA[char] = charsA[char]+ 1 || 1; 
    //  }
    //  for(let char of stringB){
    //     charsB[char] = charsB[char]+ 1 || 1; 
    // }

    // for (let x in charsA){
    //     var test = true;
    //     for (let y in charsB){
    //       if (x == y){
    //           if(charsA[x]!=charsB[y]){
    //             return false
    //           }
    //       }
    //   }
    // }

    if(Object.keys(charsA).length !== Object.keys(charsB).length){
        return false;
    }

    for (let char in charsA){
        if(charsA[char] !== charsB[char]){
            return false
        }
    }
    return true
}

function buildChar(str){
    const charMap = {};
    for(let char of str.replace(/[^\w]/g,'').toLowerCase()){
        charMap[char] = charMap[char]+ 1 || 1; 
    }
    return charMap;
}

//anagrams('rail safety', 'fairy talesas');
module.exports = anagrams;
