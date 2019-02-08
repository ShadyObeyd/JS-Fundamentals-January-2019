function solve() {
    let productDivs = Array.from(document.getElementsByClassName('product'));
    let products = getProducts(productDivs);
    let textarea = document.getElementsByTagName('textarea')[0];

    let totalSum = 0;

    let boughtProducts = [];

    for (let i = 0; i < productDivs.length; i++) {
        let button = productDivs[i].children[3];
        let product = products[i];

        button.addEventListener('click', () => {
            textarea.value += `Added ${product.productName} for ${product.productPrice.toFixed(2)} to the cart.\n`;
            totalSum += product.productPrice;

            if(!boughtProducts.includes(product.productName)){
                boughtProducts.push(product.productName);
            }
        });
    }

    let buyButton = document.getElementById('exercise').children[5];

    buyButton.addEventListener('click', () => {
        textarea.value += `You bought ${boughtProducts.join(', ')} for ${totalSum.toFixed(2)}.\n`;
    });

    function getProducts(productDivs) {

        let products = [];
        for(let productDiv of productDivs){
            let children = productDiv.children;

            let productName = children[1].textContent;

            let price = Number(children[2].textContent.split(' ')[1]);

            let product = {
                productName : productName,
                productPrice : price
            };

            products.push(product);
        }

        return products;
    }
}