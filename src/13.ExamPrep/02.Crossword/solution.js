function solve() {
   let buttons = document.getElementsByTagName('button');

   let resultP = document.querySelector('#output p');

    buttons[0].addEventListener('click', () => {
        let input = getinput();

        let selectMenu = document.getElementById('filterSecondaryCmd');
        let selectedOption = selectMenu.options[selectMenu.selectedIndex].value;
        let index = Number(document.getElementById('filterPosition').value) - 1;

        let result;
        if(selectedOption === 'uppercase'){
            result = input.slice().filter(c => c === c.toUpperCase() && isNaN(c));
        }
        else if (selectedOption === 'lowercase'){
            result = input.slice().filter(c => c === c.toLowerCase() && isNaN(c));
        }
        else if (selectedOption === 'nums'){
            result = input.slice().filter(c => !isNaN(c));
        }

        resultP.textContent += result[index];
    });

    buttons[1].addEventListener('click', () => {
        let input = getinput();

        let selectMenu = document.getElementById('sortSecondaryCmd');
        let selectedOption = selectMenu.options[selectMenu.selectedIndex].value;
        let index = Number(document.getElementById('sortPosition').value) - 1;

        let result;

        if(selectedOption === 'A'){
            result = input.slice().sort();
        }
        else if (selectedOption === 'Z'){
            result = input.slice().sort().reverse();
        }

        resultP.textContent += result[index];
    });

    buttons[2].addEventListener('click', () => {
        let input = getinput();
        let rotationsCount = Number(document.getElementById('rotateSecondaryCmd').value);
        let index = Number(document.getElementById('rotatePosition').value) - 1;
        rotateArray(rotationsCount, input);

        resultP.textContent += input[index];
    });

    buttons[3].addEventListener('click', () => {
       let input = getinput();
       let index = Number(document.getElementById('getPosition').value) - 1;

       resultP.textContent += input[index];
    });

    function rotateArray(rotationsCount, input) {
        for (let i = 0; i < rotationsCount % input.length; i++) {
            let lastElement = input[input.length - 1];

            for (let j = input.length - 1; j > 0; j--) {
                input[j] = input[j - 1];
            }

            input[0] = lastElement;
        }
    }

    function getinput() {
        return Array.from(document.getElementById('input').value);
    }
}