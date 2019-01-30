function greatestCD() {
    let firstNum = getNumberInput('num1');
    let secondNum = getNumberInput('num2');

    while (secondNum){
        let temp = secondNum;

        secondNum = firstNum % secondNum;
        firstNum = temp;
    }

    let resultElement = document.getElementById('result');
    resultElement.textContent = firstNum;

    function getNumberInput(numId) {
        return Number(document.getElementById(numId).value);
    }
}