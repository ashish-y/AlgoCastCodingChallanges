// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n,row = 0,stair ='') {
    // for (var i = 0;i<n;i++){
    //     var toprint = '';
    //     for( var j=0; j<n;j++){
    //         if(j<=i){
    //             toprint = '#'+toprint;
    //         }else{
    //             toprint =  toprint+' ';
    //         }
    //         }
    //     console.log(toprint);
    // }

    //recursion solution
    
    if (n===row){
        return;
    }

    if(n === stair.length){
        console.log(stair);
        return steps(n,row+1);
    }
    
    if(stair.length <= row){
        stair+= '#';
    }else{
        stair+= ' ';
    }
    steps(n,row,stair);

}

//steps(3);
module.exports = steps;
