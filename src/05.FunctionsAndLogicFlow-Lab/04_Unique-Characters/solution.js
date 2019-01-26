function solve() {
    let inputString = document.getElementById('string').value;

    let uniqueChars = [];

    for(let char of inputString){
        if(char === ' '){
            uniqueChars.push(char);
        } else{
            if(!uniqueChars.includes(char)){
                uniqueChars.push(char);
            }
        }
    }

    let resultElement = document.getElementById('result');
    resultElement.textContent = uniqueChars.join('');
}