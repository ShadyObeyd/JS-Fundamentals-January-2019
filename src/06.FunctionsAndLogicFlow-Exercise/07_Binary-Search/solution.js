function binarySearch() {
    let arr = document.getElementById('arr').value.split(', ').map(n => Number(n));

    let number = Number(document.getElementById('num').value);

    let resultElement = document.getElementById('result');

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === number){
            resultElement.textContent = `Found ${number} at index ${i}`;
            return;
        }
    }

    resultElement.textContent = `${number} is not in the array`;
}