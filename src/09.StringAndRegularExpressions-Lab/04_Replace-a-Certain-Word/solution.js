function solve() {
    let inputArray = JSON.parse(document.getElementById('arr').value);
    let replacementString = document.getElementById('str').value;

    let wordToReplace = inputArray[0].split(' ')[2];

    let pattern = new RegExp(wordToReplace, 'i');

    let paragraph = document.createElement('p');

    let resultElement = document.getElementById('result');

    for (let i = 0; i < inputArray.length; i++) {
        let p = paragraph.cloneNode();
        p.textContent = inputArray[i].replace(pattern, replacementString);

        resultElement.appendChild(p);
    }
}