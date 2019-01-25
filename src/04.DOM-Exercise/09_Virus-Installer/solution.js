function solve() {
    let buttons = document.getElementById('buttons').children;

    let nextButton = buttons[0];
    let cancelButton = buttons[1];
    let stepCounter = 0;

    let firstStep = document.getElementById('firstStep');
    let secondStep = document.getElementById('secondStep');
    let thirdStep = document.getElementById('thirdStep');

    let contentElement = document.getElementById('content');

    cancelButton.addEventListener('click', ()=> {
        let section = document.getElementsByTagName('section')[0];
        section.style.display = 'none';
    });

    nextButton.addEventListener('click', () => {

       if(stepCounter === 0){
           contentElement.style.backgroundImage = 'none';
           firstStep.style.display = 'block';
           stepCounter++;
       } else if(stepCounter === 1){
            let disagreeButton = document.getElementById('firstStep').children[5];

            if(disagreeButton.checked){
                return;
            }

            firstStep.style.display = 'none';
            secondStep.style.display = 'block';
            nextButton.style.display = 'none';

            setTimeout(() =>{
                nextButton.style.display = 'inline';
            }, 3000);

            stepCounter++;
       } else if(stepCounter === 2){
           secondStep.style.display = 'none';
           thirdStep.style.display = 'block';
           cancelButton.style.display = 'none';
           nextButton.textContent = 'Finish';
           stepCounter++;
       } else if(stepCounter === 3){
            let section = document.getElementsByTagName('section')[0];
            section.style.display = 'none';
       }
    });
}