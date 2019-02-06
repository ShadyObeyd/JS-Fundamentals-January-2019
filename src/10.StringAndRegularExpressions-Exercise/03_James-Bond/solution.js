function solve() {
    let inputArr = JSON.parse(document.getElementById('arr').value);

    let keyWord = inputArr[0];

    let keyLower = keyWord.toLowerCase();
    let keyUpper = keyWord.toUpperCase();


    let pattern = `(?<=\\s|^)[${keyLower}${keyUpper}]+\\s+([A-Z!%$#]{8,})(?=\\s|\\.|,|$)`;

    let regex = new RegExp(pattern, 'g');

    for (let i = 1; i < inputArr.length; i++) {
        if(!regex.test(inputArr[i])){
            continue;
        }

        let matches = inputArr[i].match(regex);

        for(let match of matches){
            let message = match.split(' ').filter(x => x !== ' ')[1];

            inputArr[i] = inputArr[i].replace(message, decodeMessage(message));
        }
    }

    let resultElement = document.getElementById('result');
    let paragraph = document.createElement('p');

    for (let i = 1; i < inputArr.length; i++) {
        let p = paragraph.cloneNode();
        p.textContent = inputArr[i];
        resultElement.appendChild(p);
    }

    function decodeMessage(message) {

        let newMessage = '';

        for(let char of message){
            if (char === '!'){
                newMessage += '1';
            } else if (char === '%'){
                newMessage += '2';
            } else if (char === '#'){
                newMessage += '3';
            } else if(char === '$'){
                newMessage += '4';
            } else {
                newMessage += char.toLowerCase();
            }
        }

        return newMessage;
    }
}