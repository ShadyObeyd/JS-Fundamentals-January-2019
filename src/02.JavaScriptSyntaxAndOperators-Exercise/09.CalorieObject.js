function solve(arr) {
    let obj = {};

    for (let i = 0; i < arr.length - 1; i+= 2) {
        obj[arr[i]] = Number(arr[i + 1]);
    }

    console.log(obj);
}

solve(['Potato', 93, 'Skyr', 63, 'Cucumber', 18, 'Milk', 42]);