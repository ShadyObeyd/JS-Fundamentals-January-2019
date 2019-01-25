function solve(fruit, grams, pricePerKG) {
    let kilograms = Number(grams) / 1000;
    let neededMoney = kilograms * Number(pricePerKG);

    console.log(`I need ${neededMoney.toFixed(2)} leva to buy ${kilograms.toFixed(2)} kilograms ${fruit}.`);
}

solve('orange', 2500, 1.80);