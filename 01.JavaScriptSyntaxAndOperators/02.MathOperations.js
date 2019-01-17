function solve(firstNum, secondNum, operator) {
    let firstNumber = Number(firstNum);
    let secondNumber= Number(secondNum);

    let result = 0;

    switch (operator) {
        case "+":
            result = firstNumber + secondNumber;
            break;
        case "-":
            result = firstNumber - secondNumber;
            break;
        case "*":
            result = firstNumber * secondNumber;
            break;
        case  "/":
            result = firstNumber / secondNumber;
            break;
        case "%":
            result = firstNumber % secondNumber;
            break;
        case "**":
            result = firstNumber ** secondNumber;
            break;
    }

    console.log(result);
}

solve(5, 6, "+");