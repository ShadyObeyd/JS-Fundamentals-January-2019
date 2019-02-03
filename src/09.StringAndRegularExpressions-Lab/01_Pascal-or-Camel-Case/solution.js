function solve() {
    let inputText = document.getElementById('str1').value;
    let convertCase = document.getElementById('str2').value;

    let result = '';

    let resultElement = document.getElementById('result');

    if(convertCase !== 'Pascal Case' && convertCase !== 'Camel Case'){
        resultElement.textContent = 'Error!';
        return;
    }

    if(convertCase === 'Pascal Case'){
        result = inputText.split(' ').map(e => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()).join('');
    } else if(convertCase === 'Camel Case'){
        let inputTextTokens = inputText.split(' ');
        let firstElement = inputTextTokens[0].toLowerCase();

        result = firstElement + inputTextTokens.slice(1).map(e => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()).join('');
    }

    resultElement.textContent = result;
}