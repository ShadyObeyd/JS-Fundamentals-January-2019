function solve() {
    let buttons = document.getElementsByTagName('button');

    let fansNumber = 0;
    let totalProfit = 0;
    let resultElement = document.getElementById('output');

    for (let i = 0; i < buttons.length - 1; i++) {

        let buttonClicked = false;

        buttons[i].addEventListener('click', () => {
            let zone = buttons[i].parentNode.parentNode.parentNode.parentNode.parentNode.className;
            let tds = Array.from(buttons[i].parentNode.parentNode.children);

            let index = tds.indexOf(buttons[i].parentNode);

            let sector = getSector(index);

            if(buttonClicked){
                resultElement.value += ` Seat ${buttons[i].textContent} in zone ${zone} sector ${sector} is unavailable.\n`;
            }

            else {
                resultElement.value += ` Seat ${buttons[i].textContent} in zone ${zone} sector ${sector} was taken.\n`;
                buttons[i].style.backgroundColor = 'rgb(255,0,0)';
                fansNumber++;
                buttonClicked = true;

                let price = getPrice(zone, sector);

                totalProfit += price;
            }
        });
    }

    let summaryButton = buttons[buttons.length - 1];

    summaryButton.addEventListener('click', () => {
        let summaryElement = document.getElementById('summary').children[1];

        summaryElement.textContent = `${totalProfit} leva, ${fansNumber} fans.`;
    });

    function getPrice(zone, sector) {
        let price = 0;

        if(sector === 'A'){
            if(zone === 'VIP'){
                price = 25;
            }
            else {
                price = 10;
            }
        }
        else if (sector === 'B'){
            if(zone === 'VIP'){
                price = 15;
            }
            else {
                price = 7;
            }
        }
        else if (sector === 'C'){
            if(zone === 'VIP'){
                price = 10;
            }
            else {
                price = 5;
            }
        }

        return price;
    }

    function getSector(index) {
        let sector = '';

        if(index === 0){
            sector = 'A';
        }
        else if (index === 1){
            sector = 'B';
        }
        else if (index === 2){
            sector = 'C';
        }

        return sector;
    }
}