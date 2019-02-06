function solve() {
    let messageSymbol = document.getElementById('str').value;
    let text = document.getElementById('text').value;

    let messagePattern = new RegExp(messageSymbol + '(.+)' + messageSymbol);

    let message =  'Message: ' + text.match(messagePattern)[1];

    let coordinatesPattern =
        /(east|north)[\s\S]*?(\d{2})[^,]*?,[^,]*?(\d{6})/gi;

    let coordinatesTokens = text.match(coordinatesPattern);


    let easternCoordinates;
    let northCoordinates;

    let numbersPattern = /(\d{2})[^,]*?,[^,]*?(\d{6})/;

    for (let i = 0; i < coordinatesTokens.length; i++) {
        let element = coordinatesTokens[i];

        if(element.toLowerCase().includes('east') && element.toLowerCase().includes('north')){
            continue;
        }
        let numbers = numbersPattern.exec(element);

        if(element.toLowerCase().includes('east')){
            easternCoordinates = `${numbers[1]}.${numbers[2]} E`;
        } else if(element.toLowerCase().includes('north')){
            northCoordinates = `${numbers[1]}.${numbers[2]} N`;
        }
    }

    let paragraph = document.createElement('p');

    let northP = createParagraph(northCoordinates);
    let eastP = createParagraph(easternCoordinates);
    let messageP = createParagraph(message);

    let resultElement = document.getElementById('result');

    resultElement.appendChild(northP);
    resultElement.appendChild(eastP);
    resultElement.appendChild(messageP);

    function createParagraph(text) {
        let p = paragraph.cloneNode();
        p.textContent = text;

        return p;
    }
}