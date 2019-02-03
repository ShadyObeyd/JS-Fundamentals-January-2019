function solve() {
    let inputString = document.getElementById('str').value;

    let inputDivider = Number(document.getElementById('num').value);

    let result = '';

    if(inputString.length % inputDivider === 0){
        getSeparatedString();
        result = result.trim();

    } else {
        let remainingLength = inputDivider - (inputString.length % inputDivider);
        getSeparatedString();

        for (let i = 0; i < remainingLength; i++) {
            result += inputString[i];
        }
    }

    let resultElement = document.getElementById('result');
    resultElement.textContent = result;

    function getSeparatedString() {
        let index = 1;
        for(let char of inputString){
            result += char;
            if(index % inputDivider === 0){
                result += ' ';
            }
            index++;
        }
    }
}