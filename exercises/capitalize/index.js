// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
   
    //---easy solution---//
    // var array = str.split(' ');
    // //console.log(array);
    // var full = [];
    // for (let char of array){
    //     //console.log(char);
    //     const capletter = char[0].toUpperCase()+char.slice(1);
    //     full.push(capletter);
    // }
    // return(full.join(' '));

    //alternate soultion - the one to use during an interview
    var result = '';
    for (let i=0;i<str.length;i++){
        if(i==0 || str[i-1] == " "){
            result = result + str[i].toUpperCase();
        }
        else{
            result = result +str[i];
        }
    }
    return(result);
}
//capitalize('ashish yadav');
module.exports = capitalize;
