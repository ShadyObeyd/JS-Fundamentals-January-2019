function solve() {
    let arr = JSON.parse(document.getElementById('arr').value).map(n => Number(n));
    let resultElement = document.getElementById('result');

    for (let i = 0; i < arr.length; i++) {
        let p = document.createElement('p');

        let result = arr[i] * arr.length;
        p.textContent = `${i} -> ${result}`;

        resultElement.appendChild(p);
    }
}