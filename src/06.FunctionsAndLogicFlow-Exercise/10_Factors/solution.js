function solve() {
    let number = Number(document.getElementById('num').value);

    let numbers = [];

    for (let i = 1; i <= number; i++) {
        if(number % i === 0){
            numbers.push(i);
        }
    }

    let resultElement = document.getElementById('result');
    resultElement.textContent = numbers.join(' ');
}