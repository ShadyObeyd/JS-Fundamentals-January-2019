function solve(arr) {
    let rotations = Number(arr.pop());

    for (let i = 0; i < rotations % arr.length; i++){
        let lastElement = arr[arr.length - 1];

        for (let j = arr.length - 1; j > 0; j--) {
            arr[j] = arr[j - 1];
        }
        arr[0] = lastElement;
    }

    console.log(arr.join(' '));
}

solve(['1', '2', '3', '4', '2']);