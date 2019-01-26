function solve() {
    let degrees = document.getElementById('num1').value;
    let type = document.getElementById('type').value;
    let result;

    if (isNaN(degrees) || type.toLowerCase() !== 'fahrenheit' || type.toLowerCase() !== 'celsius'){
        result = 'Error!';
    }

    let degreesAsNum = Number(degrees);

    if(type.toLowerCase() === 'fahrenheit'){
        let degreesResult = ((degreesAsNum - 32) * 5) / 9;
        result = Math.round(degreesResult);
    } else if(type.toLowerCase() === 'celsius'){
        let degreesResult = ((degreesAsNum * 9) / 5) + 32;
        result = Math.round(degreesResult);
    }

    let resultElement = document.getElementById('result');
    resultElement.textContent = result;

}