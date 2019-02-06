function solve() {
    let inputString = document.getElementById('str').value;

    let sum = calculateSumOfOnes(inputString);

    do {
        sum = sumDigits(sum.toString());
    } while(sum > 9);

    let newString = inputString.substring(sum, inputString.length - sum);

    let strArr = getStringArray(newString);

    let result = '';

    for(let element of strArr){
        result += String.fromCharCode(parseInt(element, 2));
    }

    let validatePattern = /[A-Za-z\s]+/g;

    result = result.match(validatePattern).join('');

    let resultElement = document.getElementById('result');
    resultElement.textContent = result;

    function getStringArray(str) {
        return str.match(/[\d]{1,8}/g);
    }

    function sumDigits(sumToString) {
        let sum = 0;

        for(let char of sumToString){
            sum += Number(char);
        }

        return sum;
    }

    function calculateSumOfOnes(inputString) {
        let sum = 0;

        for(let char of inputString){
            if(char === '1'){
                sum += Number(char);
            }
        }

        return sum;
    }
}