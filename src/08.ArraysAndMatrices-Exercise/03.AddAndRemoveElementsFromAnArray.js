function solve(commandsArr) {
    let result = [];
    let number = 1;

    for (let i = 0; i < commandsArr.length; i++) {
        if(commandsArr[i] === 'add'){
            result.push(number);
        } else if (commandsArr[i] === 'remove'){
            result.pop();
        }
        number++;
    }

    if(result.length === 0){
        console.log('Empty');
    }

    for(let num of result){
        console.log(num);
    }
}

solve(['remove', 'remove', 'remove']);