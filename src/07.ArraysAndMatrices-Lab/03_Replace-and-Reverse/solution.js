function solve() {
    let arr = JSON.parse(document.getElementById('arr').value);

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        let newWord = reverseString(word);

        newWord = newWord.charAt(0).toUpperCase() + newWord.slice(1);

        result.push(newWord);
    }

    let resultElement = document.getElementById('result');
    resultElement.textContent = result.join(' ');

    function reverseString(string) {
        let result = '';
        for (let i = string.length - 1; i >= 0; i--) {
            result += string[i];
        }

        return result;
    }
}