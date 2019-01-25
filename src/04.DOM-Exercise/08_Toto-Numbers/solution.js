function solve() {
	let button = document.getElementsByTagName('button')[0];

    button.addEventListener('click', listen);

    function listen(e) {
        let targetButton = e.target;

        let inputValue = document.getElementsByTagName('input')[0].value;

        let inputValueTokens = inputValue.split(' ').map(n => Number(n));

        let areNotInRange = inputValueTokens.some(n => n <= 0) || inputValueTokens.some(n => n >= 50);

        if(inputValueTokens.length !== 6 || areNotInRange){
            return;
        }

        let allNumbersDiv = document.getElementById('allNumbers');

        for (let i = 1; i <= 49; i++) {
            let divToAppend = document.createElement('div');
            divToAppend.textContent = i.toString();
            divToAppend.className = 'numbers';
            allNumbersDiv.appendChild(divToAppend);

            if(inputValueTokens.some(n => n === i)){
                divToAppend.style.backgroundColor = 'orange';
            }
        }

        document.getElementsByTagName('input')[0].disabled = true;
        targetButton.disabled = true;
    }
}