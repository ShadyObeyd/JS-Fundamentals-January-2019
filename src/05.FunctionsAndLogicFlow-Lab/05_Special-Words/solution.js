function solve() {
    let loopStarts = Number(document.getElementById('firstNumber').value);
    let loopEnds = Number(document.getElementById('secondNumber').value);

    let firstString = document.getElementById('firstString').value;
    let secondString = document.getElementById('secondString').value;
    let thirdString = document.getElementById('thirdString').value;

    let resultElement = document.getElementById('result');

    for (let i = loopStarts; i <= loopEnds; i++) {
        let p = document.createElement('p');
        if(i % 3 === 0 && i % 5 === 0){
            p.textContent = `${i} ${firstString}-${secondString}-${thirdString}`;
        } else if(i % 3 === 0){
            p.textContent = `${i} ${secondString}`;
        } else if(i % 5 === 0){
            p.textContent = `${i} ${thirdString}`;
        } else{
            p.textContent = i;
        }

        resultElement.appendChild(p);
    }
}