function solve() {
    let arr = JSON.parse(document.getElementById('arr').value).map(n => Number(n));

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if(i % 2 === 0){
            result.push(arr[i]);
        }
    }

    let resultElement = document.getElementById('result');
    resultElement.textContent = result.join(' x ');
}