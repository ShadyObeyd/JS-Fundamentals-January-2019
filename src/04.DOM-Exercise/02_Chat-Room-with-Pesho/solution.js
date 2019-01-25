function solve() {
    let buttons = document.getElementsByTagName('button');

    for(let button of buttons){
        button.addEventListener('click', function (e){

            let senderButton = e.target;

            let divElement = document.createElement('div');
            let spanElement = document.createElement('span');
            let paragraphElement = document.createElement('p');

            if(senderButton.name === 'myBtn'){
                spanElement.textContent = 'Me';
                paragraphElement.textContent = document.getElementById('myChatBox').value;
                divElement.style.textAlign = 'left';
            } else {
                spanElement.textContent = 'Pesho';
                paragraphElement.textContent = document.getElementById('peshoChatBox').value;
                divElement.style.textAlign = 'right';
            }

            divElement.appendChild(spanElement);
            divElement.appendChild(paragraphElement);

            let chat = document.getElementById('chatChronology');

            chat.appendChild(divElement);

            document.getElementById('myChatBox').value = '';
            document.getElementById('peshoChatBox').value = '';
        });
    }
}