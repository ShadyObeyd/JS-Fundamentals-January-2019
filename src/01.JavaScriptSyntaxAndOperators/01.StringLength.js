function solve(firstStr, secondStr, thirdStr) {
    let lengthSum = firstStr.length + secondStr.length + thirdStr.length;

    console.log(lengthSum);

    let averageSum = Math.floor(lengthSum / 3);

    console.log(averageSum);
}

solve('chocolate', 'ice cream', 'cake');