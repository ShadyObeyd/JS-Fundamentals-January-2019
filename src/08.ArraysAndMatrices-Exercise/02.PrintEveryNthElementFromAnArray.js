function solve(strArr) {
    let step = Number(strArr.pop());

    for (let i = 0; i < strArr.length; i++) {
        if(i % step === 0){
            console.log(strArr[i]);
        }
    }
}

solve(['5','20', '31', '4', '20', '2']);