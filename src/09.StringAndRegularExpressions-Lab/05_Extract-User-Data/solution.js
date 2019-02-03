function solve() {
    let inputArr = JSON.parse(document.getElementById('arr').value);

    let paragraph = document.createElement('p');

    let pattern = /^([[A-Z][a-z]* [A-Za-z]*) (\+359( |-)[0-9]\3[0-9]{3}\3[0-9]{3}) ([a-z0-9]+@[a-z]+\.[a-z]{2,3})$/;

    let resultElement = document.getElementById('result');

    for(let string of inputArr){
        if(pattern.exec(string)){
            let result = pattern.exec(string);

            let nameP = createParagraph(`Name: ${result[1]}`);
            let phoneP = createParagraph(`Phone Number: ${result[2]}`);
            let mailP = createParagraph(`Email: ${result[4]}`);

            resultElement.appendChild(nameP);
            resultElement.appendChild(phoneP);
            resultElement.appendChild(mailP);
        } else {
            let invalidP = paragraph.cloneNode();
            invalidP.textContent = 'Invalid data';

            resultElement.appendChild(invalidP);
        }

        let dashP = paragraph.cloneNode();
        dashP.textContent = '- - -';
        resultElement.appendChild(dashP);
    }

    function createParagraph(text) {
        let p = paragraph.cloneNode();
        p.textContent = text;

        return p;
    }
}