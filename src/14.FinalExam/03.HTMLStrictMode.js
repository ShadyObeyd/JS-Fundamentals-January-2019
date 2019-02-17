function solve(stringArr) {

    let result = '';

    let pattern = /^<([\w]+.*?)>(.*?)<\/\1>$/g;
    let partialPattern = />([^<>]*)</g;
    for(let str of stringArr){

        if(!str.match(pattern)){
            continue;
        }

        let matches = str.match(partialPattern);

        for(let match of matches){
            if(match.length === 2){
                continue;
            }

            let tempResult = match.slice(1, match.length - 1);

            result += tempResult.trim() + ' ';
        }
    }

    console.log(result);
}