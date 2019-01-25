function solve() {
    let buttons = Array.from(document.getElementsByTagName('button'));

    let answerCounter = 0;

    for(let button of buttons){
        button.addEventListener('click', function listen(e) {
            let buttonTarget = e.target;

            let parent = buttonTarget.parentNode;

            let firstOption = parent.children[1];
            let secondOption = parent.children[4];
            let thirdOption = parent.children[7];
            let fourthOption = parent.children[10];

            let checkedOptionValue = '';

            if(firstOption.checked){
                checkedOptionValue = firstOption.value;
                disableOptions(secondOption, thirdOption, fourthOption);
            } else if(secondOption.checked){
                checkedOptionValue = secondOption.value;
                disableOptions(firstOption, thirdOption, fourthOption);
            } else if(thirdOption.checked){
                checkedOptionValue = thirdOption.value;
                disableOptions(firstOption, secondOption, fourthOption);
            } else if(fourthOption.checked){
                checkedOptionValue = fourthOption.value;
                disableOptions(firstOption, secondOption, thirdOption);
            }

            if(checkedOptionValue === ''){
                return;
            }

            let question = parent.children[0].textContent;

            if(question === 'When SoftUni was created?'){
                if(checkedOptionValue === '2013'){
                    answerCounter++;
                }
            } else if(question === 'Which is the most popular name in the SoftUni?'){
                if(checkedOptionValue === 'Pesho'){
                    answerCounter++;
                }
            } else if(question === 'Which of the following names is the founder of the SoftUni?'){
                if(checkedOptionValue === 'Nakov'){
                    answerCounter++;
                }
            }

            let buttonIndex = buttons.indexOf(button);

            if(buttonIndex === 0 || buttonIndex === 1){
                let nextSection = document.getElementsByTagName('section')[buttonIndex + 1];

                nextSection.className = '';
            } else if(buttonIndex === 2){
                let result = document.getElementById('result');
                if(answerCounter === 3){
                    result.textContent = 'You are recognized as top SoftUni fan!';
                } else {
                    result.textContent = `You have ${answerCounter} right answers`;
                }
            }

            button.removeEventListener('click', listen);
        });
    }

    function disableOptions(firstOption, secondOption, thirdOption) {
        firstOption.disabled = true;
        secondOption.disabled = true;
        thirdOption.disabled = true;
    }
}