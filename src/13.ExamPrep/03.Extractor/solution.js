function solve() {
    let button = document.getElementsByTagName('button')[0];

    button.addEventListener('click', () => {
        let input = document.getElementById('input').value;

        let numberPattern = /^\d*/;

        let startingIndex = input.match(numberPattern).join('').length;

        let numberToTakeFromTheString = Number(input.match(numberPattern));

        input = input.substr(startingIndex, numberToTakeFromTheString);

        let lastElement = input[input.length - 1];

        input = input.slice(0, -1);

        input = input.split(lastElement);

        let pattern = '[^' + input[0] + ']';

        let regex = new RegExp(pattern, 'g');

        let result = input[1].match(regex);

        for (let i = 0; i < result.length; i++) {
            if(result[i] === '#'){
                result[i] = ' ';
            }
        }

        let resultElement = document.getElementById('output');
        resultElement.value = result.join('').trim();
    });
}