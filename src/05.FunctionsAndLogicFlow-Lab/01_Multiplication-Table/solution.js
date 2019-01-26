function solve() {
    let firstNumber=  Number(document.getElementById('num1').value);
    let secondNumber = Number(document.getElementById('num2').value);
    let resultElement = document.getElementById('result');

    getWrongNumber(firstNumber, secondNumber, resultElement);
    printTable(firstNumber, secondNumber, resultElement);

    function getWrongNumber(firstNumber, secondNumber, resultElement) {
        if(firstNumber > secondNumber){
            resultElement.innerHTML = 'Try with other numbers.';
        }
    }

    function printTable(firstNumber, secondNumber, resultElement) {
        for (let i = firstNumber; i <= secondNumber; i++) {
            let result = i * secondNumber;
            let pElement = document.createElement('p');
            pElement.textContent = `${i} * ${secondNumber} = ${result}`;
            resultElement.appendChild(pElement);
        }
    }
}