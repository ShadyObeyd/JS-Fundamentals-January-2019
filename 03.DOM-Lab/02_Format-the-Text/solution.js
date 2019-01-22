function solve(){
    let textToFormat = document.getElementById('input').textContent;

    let textTokens = textToFormat.split('.');

    if(textTokens.length <= 3){
        let paragraph = document.createElement('p');
        paragraph.textContent = textToFormat;
        let output = document.getElementById('output');
        output.appendChild(paragraph);
    } else {
        let output = document.getElementById('output');
        let index = 0;
        let sentencesToAdd = '';

        for(let sentence of textTokens){
            index++;
            sentence += '.';
            sentencesToAdd += sentence;

            if(index % 3 === 0){
                let paragraph = document.createElement('p');
                paragraph.textContent = sentencesToAdd;
                output.appendChild(paragraph);
                sentencesToAdd = '';
            }
        }

        if(index % 3 !== 0){
            let sentencesLeft = index % 3;

            let paragraph = document.createElement('p');

            for (let i = sentencesLeft; i > 1; i--) {
                let sentence = textTokens[textTokens.length - i] + '.';
                paragraph.textContent += sentence;

                output.appendChild(paragraph);
            }
        }
    }
}