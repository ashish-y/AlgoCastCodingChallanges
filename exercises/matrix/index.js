// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    const max = n*n;
    
    var results = [];
    for (let i=0; i<n;i++){
        results.push([]);
        //console.log(results);
    }

    var counter = 1;

    var startrow = 0;
    var endrow = n-1

    var startcolumn = 0;
    var endcolumn = n-1;

    while(startcolumn <= endcolumn && startrow <= endrow){
        //top column
        for(let i = startcolumn; i<=endcolumn; i++){

            results[startrow][i] = counter;
            counter++;

        }
        
        //right column
        startrow++;
        for(let j = startrow; j<=endrow; j++){

            results[j][endcolumn] = counter;
            counter++;

        }
        endcolumn--;

        //bottom row
        for(let i = endcolumn; i>=startcolumn; i--){

            results[endrow][i] = counter;
            counter++;

        }
        endrow--;
        
        //start coulm
        for(let j = endrow; j>=startrow; j--){

            results[j][startcolumn] = counter;
            counter++;

        }
        startcolumn++;

    }

    return(results);
}

//matrix(3);
module.exports = matrix;
