function solve() {
    let generateButton = document.getElementsByTagName('button')[0];

    generateButton.addEventListener('click', () => {
        let input = document.getElementsByTagName('textarea')[0].value;

        let furnitureArr = JSON.parse(input);

        let resultDiv = document.getElementById('furniture-list');

        for (let furniture of furnitureArr){
            let divToAdd = document.createElement('div');
            divToAdd.className = 'furniture';

            let nameP = createParagraph('Name: ' + furniture.name);
            divToAdd.appendChild(nameP);

            let imgElement = document.createElement('img');
            imgElement.src = furniture.img;
            divToAdd.appendChild(imgElement);

            let priceP = createParagraph('Price: ' + furniture.price);
            divToAdd.appendChild(priceP);

            let decFactorP = createParagraph('Decoration factor: ' + furniture.decFactor);
            divToAdd.appendChild(decFactorP);

            let checkBox = document.createElement('input');
            checkBox.type = 'checkbox';
            divToAdd.appendChild(checkBox);

            resultDiv.appendChild(divToAdd);
        }
    });

    let buyButton = document.getElementsByTagName('button')[1];

    buyButton.addEventListener('click',() => {
        let furnitureList = Array.from(document.getElementsByClassName('furniture'));

        let boughtFurniture = [];
        let totalPrice = 0;

        let decFactors = [];

        let resultElement = document.getElementsByTagName('textarea')[1];

        for(let furniture of furnitureList){
            let checkbox = furniture.children[4];

            if(!checkbox.checked){
                continue;
            }

            let furnitureTokens = furniture.children;

            let furnitureName = furnitureTokens[0].textContent.split(' ')[1];
            let price = Number(furnitureTokens[2].textContent.split(' ')[1]);
            let decFactor = Number(furnitureTokens[3].textContent.split(' ')[2]);

            totalPrice += price;

            boughtFurniture.push(furnitureName);
            decFactors.push(decFactor);
        }

        resultElement.value = `Bought furniture: ${boughtFurniture.join(', ')}\n`;
        resultElement.value += `Total price: ${totalPrice.toFixed(2)}\n`;
        let averageDecFactor = (decFactors.reduce((a, b) => a + b)) / decFactors.length;
        resultElement.value += `Average decoration factor: ${averageDecFactor}`;
    });

    function createParagraph(textContent) {
        let p = document.createElement('p');
        p.textContent = textContent;

        return p;
    }
}