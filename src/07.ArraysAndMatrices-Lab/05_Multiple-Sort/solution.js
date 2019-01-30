function solve() {
    let arr = JSON.parse(document.getElementById('arr').value);

    let ascendingOrdered = arr.slice().sort((a, b) => a - b);
    let alphabeticallyOrdered = arr.slice().sort();

    let ascDiv = document.createElement('div');
    ascDiv.textContent = ascendingOrdered.join(', ');

    let alphabeticallyDiv = document.createElement('div');
    alphabeticallyDiv.textContent = alphabeticallyOrdered.join(', ');

    let resultElement = document.getElementById('result');

    resultElement.appendChild(ascDiv);
    resultElement.appendChild(alphabeticallyDiv);
}