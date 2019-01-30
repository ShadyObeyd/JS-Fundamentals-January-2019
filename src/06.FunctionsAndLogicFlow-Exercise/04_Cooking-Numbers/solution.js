function solve() {
    let buttons = document.getElementById('operations').children;

    let number;

    let startedOperations = false;

    addEventListenerToButton(buttons[0]);
    addEventListenerToButton(buttons[1]);
    addEventListenerToButton(buttons[2]);
    addEventListenerToButton(buttons[3]);
    addEventListenerToButton(buttons[4]);

    function addEventListenerToButton(button) {
        button.addEventListener('click', () => {
            if(!startedOperations){
                number = Number(document.getElementsByTagName('input')[0].value);
                startedOperations = true;
            }

            if(button.textContent === 'Chop'){
                number /= 2;
            } else if(button.textContent === 'Dice'){
                number = Math.sqrt(number);
            } else if(button.textContent === 'Spice'){
                number++;
            } else if(button.textContent === 'Bake'){
                number *= 3;
            } else if(button.textContent === 'Fillet'){
                number *= 0.8;
            }

            let resultElement = document.getElementById('output');
            resultElement.textContent = number;
        });
    }
}