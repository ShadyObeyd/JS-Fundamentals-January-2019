function solve() {
    let images = document.getElementsByTagName('img');

    for(let image of images){
        image.addEventListener('click', function (e){
            let card = e.target;

            card.src = './images/whiteCard.jpg';
            let parentElement = card.parentNode;

            let spans = document.getElementById('result').children;

            let leftSpan = spans[0];
            let rightSpan = spans[2];

            if(parentElement.id === 'player1Div'){
                leftSpan.textContent = card.name;
            } else if(parentElement.id === 'player2Div'){
                rightSpan.textContent = card.name;
            }

            if(leftSpan.textContent === '' || rightSpan.textContent === ''){
                return;
            }

            let leftValue = Number(leftSpan.textContent);
            let rightValue = Number(rightSpan.textContent);

            let winner;
            let loser;

            if(leftValue > rightValue){
                winner = document.querySelector(`#player1Div img[name="${leftSpan.textContent}"]`);
                loser = document.querySelector(`#player2Div img[name="${rightSpan.textContent}"]`);
            } else {
                winner = document.querySelector(`#player2Div img[name="${rightSpan.textContent}"]`);
                loser = document.querySelector(`#player1Div img[name="${leftSpan.textContent}"]`);
            }

            winner.style.border = '2px solid green';
            loser.style.border = '2px solid darkred';

            let historyDiv = document.getElementById('history');

            historyDiv.textContent += `[${leftValue} vs ${rightValue}] `;

            leftSpan.textContent = '';
            rightSpan.textContent = '';
        });
    }
}