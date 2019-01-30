function validate() {
    let button = document.getElementsByTagName('button')[0];

    button.addEventListener('click', () => {
        let input = document.getElementsByTagName('input')[0].value;



        let weights = [2, 4, 8, 5, 10, 9, 7, 3, 6];

        let sum = 0;

        for (let i = 0; i < 9; i++) {
            sum += Number(input[i]) * weights[i];
        }

        let result = sum % 11;
        let lastNum = Number(input[input.length - 1]);

        let resultText;

        if(result === lastNum || (result === 10 && lastNum === 0)){
            resultText = 'This number is Valid!'
        } else {
            resultText = 'This number is NOT Valid!';
        }

        let resultElement = document.getElementById('response');
        resultElement.textContent = resultText;
    });
}