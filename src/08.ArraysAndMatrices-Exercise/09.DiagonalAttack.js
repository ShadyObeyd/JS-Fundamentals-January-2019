function solve(strArr) {
    let matrix = [];
    for (let i = 0; i < strArr.length; i++) {
        matrix[i] = strArr[i].split(' ').map(n => Number(n));
    }

    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;

    for (let row = 0; row < matrix.length; row++) {
        firstDiagonalSum += matrix[row][row];
        secondDiagonalSum += matrix[row][matrix.length - row - 1];
    }

    if(firstDiagonalSum === secondDiagonalSum){
        mutateMatrix(matrix);
    }

    for(let row of matrix){
        console.log(row.join(' '));
    }

    function mutateMatrix(matrix) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if(row !== col && matrix.length - row - 1 !== col){
                    matrix[row][col] = firstDiagonalSum;
                }
            }
        }
    }
}

solve(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']);