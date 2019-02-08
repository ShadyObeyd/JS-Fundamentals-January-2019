function solve() {
    let storage = [];

    let resultElement = document.getElementsByTagName('textarea')[2];

    let loadButton = document.getElementsByTagName('button')[0];

    loadButton.addEventListener('click', () => {
        let inputProducts = JSON.parse(document.getElementsByTagName('textarea')[0].value);

        for(let inputProduct of inputProducts){
            if(storage.some(p => p.name === inputProduct.name)){
                let product = storage.filter(p => p.name === inputProduct.name)[0];
                product.price = inputProduct.price;
                product.quantity += inputProduct.quantity;
            }
            else{
                storage.push(inputProduct);
                resultElement.value += `Successfully added ${inputProduct.quantity} ${inputProduct.name}. Price: ${inputProduct.price}\n`;
            }
        }
    });

    let buyButton = document.getElementsByTagName('button')[1];

    let totalProfit = 0;

    buyButton.addEventListener('click', () => {
        let toBuyProduct = JSON.parse(document.getElementsByTagName('textarea')[1].value);

        if(storage.some(p => p.name === toBuyProduct.name)){
            let product = storage.filter(p => p.name === toBuyProduct.name)[0];

            if(product.quantity >= toBuyProduct.quantity){
                resultElement.value += `${toBuyProduct.quantity} ${product.name} sold for ${product.price * toBuyProduct.quantity}.\n`;

                product.quantity -= toBuyProduct.quantity;
                totalProfit += (product.price * toBuyProduct.quantity);
            }
            else {
                resultElement.value += 'Cannot complete order.\n';
            }
        }
        else {
            resultElement.value += 'Cannot complete order.\n';
        }
    });

    let endDayButton = document.getElementsByTagName('button')[2];

    endDayButton.addEventListener('click', () => {
        resultElement.value += `Profit: ${totalProfit.toFixed(2)}.\n`;

        Array.from(document.getElementsByTagName('button')).map(b => b.disabled = true);
    });
}