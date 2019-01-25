function solve() {
    let selectTo = document.getElementById('selectMenuTo');

    let binaryOption = document.createElement('option');
    binaryOption.value = 'binary';
    binaryOption.textContent = 'Binary';

    selectTo.appendChild(binaryOption);

    let hexadecimalOption = document.createElement('option');
    hexadecimalOption.value = 'hexadeicmal';
    hexadecimalOption.textContent = 'Hexadeicmal';

    selectTo.appendChild(hexadecimalOption);

    let buttons = document.getElementsByTagName('button');

    let button = buttons[0];

    button.addEventListener('click', () => {

       let number = Number(document.getElementById('input').value);

       let menu = document.getElementById('selectMenuTo');

       let selectedOption = menu.options[menu.selectedIndex].value;

       let result;

       if(selectedOption === 'binary'){
           result = number.toString(2);
       } else{
           result = number.toString(16).toUpperCase();
       }

       let resultElement = document.getElementById('result');
       resultElement.value = result;
    });
}