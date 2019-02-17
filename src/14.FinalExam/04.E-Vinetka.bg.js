function solve(objects) {
    let newObjects = [];
    for(let obj of objects){
        if(newObjects.some(o => o.town === obj.town)){
            let object = newObjects.filter(o => o.town === obj.town)[0];

            object.price += obj.price;
        }
        else {
            newObjects.push(obj);
        }
    }

    newObjects.sort((a, b) => {
        return a.price - b.price;
    }).reverse();

    let largestProfit = newObjects[0].price;

    let objectsWithLargestProfits = [];

    for(let obj of objects){
        if(obj.price === largestProfit){
            objectsWithLargestProfits.push(obj);
        }
    }

    if(objectsWithLargestProfits.length === 1){
        console.log(`${objectsWithLargestProfits[0].town} is most profitable - ${largestProfit} BGN`);

        let obj = objectsWithLargestProfits[0];

        let mostPopularModelObj = objects.slice().filter(o => o.town === obj.town).filter((a, b) => {
            return objects.filter(v => v.model === a.model).length -
                objects.filter(v => v.model === b.model).length
        }).pop();

        console.log(`Most driven model: ${mostPopularModelObj.model}`);

        let carObj = {};

        for(let obj of objects){
            if(obj.model === mostPopularModelObj.model){
                carObj[obj.town] = [];
            }
        }

        for(let obj of objects){
            if(obj.model === mostPopularModelObj.model){
                carObj[obj.town].push(obj.regNumber);
            }
        }

        let keys = [];

        for(let key in carObj){
            keys.push(key);
        }

        keys.sort();

        for (let i = 0; i < keys.length; i++) {
            let newKey = keys[i];

            console.log(`${newKey}: ${carObj[newKey].sort().join(', ')}`);
        }
    }
    else{
        let mostCommonTownObject = objectsWithLargestProfits.slice().sort((a, b) => {
            return objects.filter(v => v.town === a.town).length -
                objects.filter(v => v.town === b.town).length
        }).pop();

        console.log(`${mostCommonTownObject.town} is most profitable - ${largestProfit} BGN`);

        let mostPopularModel = objects.slice().filter(o => o.town === mostCommonTownObject.town).filter((a, b) => {
            return objects.filter(v => v.model === a.model).length -
                objects.filter(v => v.model === b.model).length
        }).pop();

        console.log(`Most driven model: ${mostPopularModel.model}`);

        let carObj = {};

        for(let obj of objects){
            if(obj.model === mostPopularModel.model){
                carObj[obj.town] = [];
            }
        }

        for(let obj of objects){
            if(obj.model === mostPopularModel.model){
                carObj[obj.town].push(obj.regNumber);
            }
        }

        let keys = [];

        for(let key in carObj){
            keys.push(key);
        }

        keys.sort();

        for (let i = 0; i < keys.length; i++) {
            let newKey = keys[i];

            console.log(`${newKey}: ${carObj[newKey].sort().join(', ')}`);
        }
    }
}