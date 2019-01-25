function solve(num1, num2, num3) {
    let  firstNumber = Number(num1);
    let secondNumber = Number(num2);
    let thirdNumber = Number(num3);

    let largestNumber = Math.max(Math.max(firstNumber, secondNumber), thirdNumber);

    console.log(`The largest number is ${largestNumber}.`);
}

solve(-5, -3, -22.5);