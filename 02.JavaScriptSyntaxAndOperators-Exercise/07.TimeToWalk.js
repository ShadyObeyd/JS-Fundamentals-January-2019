function solve(steps, footprintInMeters, speedInKmPerH) {
    let distanceInMeters = steps * footprintInMeters;

    let speedInMPerS = (speedInKmPerH * 1000) / 60 / 60;

    let timeInSeconds = distanceInMeters / speedInMPerS;

    let rests = 0;

    for (let i = 1; i <= distanceInMeters; i++) {
        if (i % 500 === 0) {
            rests++;
        }
    }

    timeInSeconds += (rests * 60);

    let hours = Math.floor(timeInSeconds / 3600);
    timeInSeconds %= 3600;
    let minutes = Math.floor(timeInSeconds / 60);
    let seconds = Math.round(timeInSeconds % 60);

    minutes = String(minutes).padStart(2, "0");
    hours = String(hours).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    console.log(hours + ":" + minutes + ":" + seconds);
}
solve(2564, 0.70, 5.5);