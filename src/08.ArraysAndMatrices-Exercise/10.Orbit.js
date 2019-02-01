function solve(arr) {
    let cols = arr[0];
    let rows = arr[1];
    let currentRow = arr[2];
    let currentCol = arr[3];

    let matrix = [];

    for (let row = 0; row < rows; row++) {
        matrix[row] = [];

        for (let col = 0; col < cols; col++) {
            matrix[row][col] = Math.max(Math.abs(row - currentRow),Math.abs(col - currentCol)) + 1;
        }
    }


    for(let row of matrix){
        console.log(row.join(' '));
    }
}

solve([5, 5, 2, 2]);