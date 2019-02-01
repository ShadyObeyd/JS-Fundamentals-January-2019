function solve(strArr) {
    strArr.sort(sortArray);

    for(let element of strArr){
        console.log(element);
    }

    function sortArray(a, b) {
        return a.length - b.length || a.localeCompare(b);
    }
}

solve(['test', 'Deny', 'omen', 'Default']);