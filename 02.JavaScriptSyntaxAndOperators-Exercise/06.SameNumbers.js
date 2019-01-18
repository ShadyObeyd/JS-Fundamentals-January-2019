function solve(number) {
    let numberStr = number.toString();

    let sum = 0;

    let areSame = true;

    for (let i = 0; i < numberStr.length - 1; i++) {
        if(numberStr[i] !== numberStr[i + 1]){
            areSame = false;
        }
        sum += Number(numberStr[i]);
    }
    sum += Number(numberStr[numberStr.length - 1]);

    console.log(areSame);
    console.log(sum);
}

solve(1234);