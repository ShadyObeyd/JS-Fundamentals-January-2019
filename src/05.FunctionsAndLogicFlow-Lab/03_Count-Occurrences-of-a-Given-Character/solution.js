function solve() {
    let string = document.getElementById('string').value;
    let inputChar = document.getElementById('character').value;

    let counter = 0;
    for(let char of string){
        if(char === inputChar){
            counter++;
        }
    }

    let result = counter % 2 === 0 ? 'even' : 'odd';

    let resultElement = document.getElementById('result');
    resultElement.textContent = `Count of ${inputChar} is ${result}.`;
}