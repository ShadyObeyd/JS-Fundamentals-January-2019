function solve(matrix) {
    let sum = 0;

    for (let row = 0; row < matrix.length; row++) {
        let currRowSum = 0;

        for (let col = 0; col < matrix[row].length; col++) {
            currRowSum += matrix[row][col];
        }

        if(row === 0){
            sum = currRowSum;
        } else if(currRowSum !== sum){
            return false;
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        let currColSum = 0;

        for (let j = 0; j < matrix.length; j++) {
            currColSum += matrix[i][j];
        }

        if(sum !== currColSum){
            return false;
        }
    }

    return true;
}

console.log(solve([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]));;