function getNext() {
    let number = Number(document.getElementById('num').value);

    let resultElement = document.getElementById('result');

    resultElement.textContent += `${number} `;

    while (number > 1){
        if(number % 2 === 0){
            number = number / 2;
        } else {
            number = (3 * number) + 1;
        }

        resultElement.textContent += `${number} `;
    }
}