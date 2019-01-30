function solve() {
    let number = Number(document.getElementById('num').value);
    let arr = JSON.parse(document.getElementById('arr').value);

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let string = arr[i];

        let trueOrFalse = string.includes(number);
        let index = string.indexOf(number);

        result.push(`${trueOrFalse} -> ${index}`);
    }

    let resultElement = document.getElementById('result');
    resultElement.textContent = result.join(',');
}