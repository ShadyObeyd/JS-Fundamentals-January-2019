function solve() {
    let inputTextTokens = document.getElementById('str').value.split(' ');

    let resultElement = document.getElementById('result');

    let paragraph = document.createElement('p');

    let numbers = [];

    for(let element of inputTextTokens){
        if(isNaN(element)){
            let newWord = element.split('').map(c => c.charCodeAt(0)).join(' ');

            let wordParagraph = paragraph.cloneNode();
            wordParagraph.textContent = newWord;

            resultElement.appendChild(wordParagraph);
        } else {
            numbers.push(element);
        }
    }

    let numbersParagraph = paragraph.cloneNode();
    numbersParagraph.textContent = String.fromCharCode(...numbers);

    resultElement.appendChild(numbersParagraph);
}