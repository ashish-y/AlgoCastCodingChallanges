// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
//     const midpoint =  Math.floor((2*n-1)/2);

//     for (let row = 0; row < n; row++) {
        
//         var level = '';
        
//         for(let col = 0; col < (n*2)-1; col++){
            
//             // if(col < (n-1)-row){
                
//             //     level += ' ';
                
//             // }else if(col > (n-1)+row){

//             //     level += ' ';
            
//             // }

//             // else{
                
//             //     level += '#';
            
//             // }

//             //midpoint solution
//             if(midpoint - row <= col && midpoint + row >= col){
//                 level += '#';
//             }
//             else{
//                 level += ' ';
//             }
            
//         }
//         console.log(level);
//     }
// }

//recursive solution
function pyramid(n,row = 0, level = '',col = 0){

    var midpoint =Math.floor((n*2-1)/2);
    var column = (n*2)-1;
    
    if (n == row){
        return;
    }

    if(column == level.length){
        console.log(level);
        pyramid(n,row+1);
    }
    if(col == column){
        return;
    }
    if(midpoint - row <= col && midpoint + row >= col){
        level += '#';
    }else{
        level += ' ';
    }

    pyramid(n,row,level,col+1);


}

//pyramid(4);

module.exports = pyramid;