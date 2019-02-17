function solve(matrix, command) {

    let commandTokens = command.split(' ').filter(x => x !== ' ');

    if(commandTokens[0] === 'hide'){
        hideColumn(matrix, commandTokens[1]);
    } else if (commandTokens[0] === 'sort'){
        sortRows(matrix, commandTokens[1]);
    } else if (commandTokens[0] === 'filter'){
        filterMatrix(matrix, commandTokens[1], commandTokens[2]);
    }
    
    function filterMatrix(matrix, header, value) {
        let firstRow = matrix[0].join(' | ');
        console.log(firstRow);
        let headerIndex = matrix[0].indexOf(header);

        for (let row = 1; row < matrix.length; row++) {
            if(matrix[row][headerIndex] !== value){
                continue;
            }
            matrix[row] = matrix[row].join(' | ');

            console.log(matrix[row]);
        }
    }

    function sortRows(matrix, header) {
        let firstRow = matrix[0].join(' | ');
        console.log(firstRow);
        let headerIndex = matrix[0].indexOf(header);

        matrix.sort((a, b) => {
            if(a[headerIndex] === b[headerIndex]){
                return 0;
            }
            else {
                return (a[headerIndex] < b[headerIndex] ? - 1 : 1);
            }
        });

        for (let row = 0; row < matrix.length; row++) {
            matrix[row] = matrix[row].join(' | ');

            if(matrix[row] === firstRow){
                continue;
            }

            console.log(matrix[row]);
        }
    }

    function hideColumn(matrix, header) {
        let headerIndex = matrix[0].indexOf(header);

        for (let row = 0; row < matrix.length; row++) {
            matrix[row].splice(headerIndex, 1);
            matrix[row] = matrix[row].join(' | ');

            console.log(matrix[row]);
        }
    }
}

solve(
    [['name', 'age', 'grade'],
        ['Peter', '25', '5.00'],
        ['George', '34', '6.00'],
        ['Marry', '28', '5.49']],
    'sort name'
);