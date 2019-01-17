function solve(radius) {
    let type = typeof(radius);

    if(type !== "number"){
        console.log(`We can not calculate the circle area, because we receive a ${typeof (radius)}.`);
        return;
    }

    let circleRadius = Math.pow(radius, 2) * Math.PI;

    console.log(circleRadius.toFixed(2));
}

solve(undefined);