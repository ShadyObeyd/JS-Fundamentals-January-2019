function solve() {
    let buttons = document.getElementsByTagName('button');

    let backupTiresElement = document.getElementsByTagName('fieldset')[3].children[1];
    let trucksElement = document.getElementsByTagName('fieldset')[4].children[1];

    let trucks = [];
    let backupTires = [];

    buttons[0].addEventListener('click', () => {
        let truckPlateNumber = document.getElementById('newTruckPlateNumber').value;
        let tiresCondition = document.getElementById('newTruckTiresCondition').value.split(' ').map(t => Number(t));

        if(!trucks.some(t => t.plateNumber === truckPlateNumber)){
            let truck = {
                plateNumber: truckPlateNumber,
                tiresCondition: tiresCondition,
                totalDistance: 0
            };

            trucks.push(truck);

            let truckDiv = document.createElement('div');
            truckDiv.className = 'truck';

            truckDiv.textContent = truck.plateNumber;

            trucksElement.appendChild(truckDiv);
        }
    });

    buttons[1].addEventListener('click', () => {
        let tiresInput = document.getElementById('newTiresCondition').value.split(' ').map(t => Number(t));

        backupTires.push(tiresInput);

        let tireDiv = document.createElement('div');
        tireDiv.className = 'tireSet';

        tireDiv.textContent = tiresInput.join(' ');

        backupTiresElement.appendChild(tireDiv);
    });

    buttons[2].addEventListener('click', () => {
       let plateNumber = document.getElementById('workPlateNumber').value;
       let distance = Number(document.getElementById('distance').value);

       let amountToReduceTires = distance / 1000;

        if(trucks.some(t => t.plateNumber === plateNumber)){
            let truck = trucks.filter(t => t.plateNumber === plateNumber)[0];

            let canTravel = truck.tiresCondition.every(t => t >= amountToReduceTires);

            if (canTravel){
                reduceTires(truck, amountToReduceTires, distance);
            }
            else {
                if(backupTires.length > 0){

                    let canTravelAfterChange = true;

                    let tiresReduceAmounts = [];

                    for (let i = 0; i < truck.tiresCondition.length; i++) {
                        let tireResult = amountToReduceTires - truck.tiresCondition[i];

                        tiresReduceAmounts.push(tireResult);

                        if(truck.tiresCondition[i] < tireResult){
                            canTravelAfterChange = false;
                        }
                    }

                    truck.tiresCondition = backupTires[0];

                    if(canTravelAfterChange){
                        for (let i = 0; i < truck.tiresCondition.length; i++) {
                            truck.tiresCondition[i] -= tiresReduceAmounts[i];
                        }

                        truck.totalDistance += distance;
                    }
                    backupTires.shift();
                    backupTiresElement.children[0].remove();
                }
            }
        }
    });

    buttons[3].addEventListener('click', () => {
        let resultElement = document.getElementsByTagName('textarea')[0];

        for(let truck of trucks){
            resultElement.value += `Truck ${truck.plateNumber} has traveled ${truck.totalDistance}.\n`;
        }

        resultElement.value += `You have ${backupTires.length} sets of tires left.\n`;
    });

    function reduceTires(truck, amountToReduceTires, distance) {
        for (let i = 0; i < truck.tiresCondition.length; i++) {
            truck.tiresCondition[i] -= amountToReduceTires;
        }
        truck.totalDistance += distance;
    }
}