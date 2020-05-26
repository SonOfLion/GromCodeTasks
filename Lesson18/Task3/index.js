'use strict';
//pseudo array

function sumOfSquares(...numbers) {
    // console.log(typeof arguments);

    return [...numbers].reduce((acc, elem) => {
        return acc + elem;
    }, 0);
}

// sumOfSquares(1, 2, 3, 4);

// [].reduce((acc, elem) => { return }, 0);

console.log(sumOfSquares(14, 23, 4));