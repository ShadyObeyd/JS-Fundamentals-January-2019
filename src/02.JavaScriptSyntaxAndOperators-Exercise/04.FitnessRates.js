function solve(dayOfWeek, service, visitHour) {
    if (dayOfWeek === 'Monday' || dayOfWeek === 'Tuesday' || dayOfWeek === 'Wednesday' || dayOfWeek === 'Thursday' || dayOfWeek === 'Friday'){
        if(service === 'Fitness'){
            if(visitHour >= 8 && visitHour <= 15){
                console.log(5);
            } else if(visitHour > 15 && visitHour <= 22){
                console.log(7.5);
            }
        } else if(service === 'Sauna'){
            if(visitHour >= 8 && visitHour <= 15){
                console.log(4);
            } else if(visitHour > 15 && visitHour <= 22){
                console.log(6.5);
            }
        } else if(service === 'Instructor'){
            if(visitHour >= 8 && visitHour <= 15){
                console.log(10);
            } else if(visitHour > 15 && visitHour <= 22){
                console.log(12.5);
            }
        }
    } else if(dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday'){
        if(service === 'Fitness'){
            console.log(8);
        } else if(service === 'Sauna'){
            console.log(7);
        } else if(service === 'Instructor'){
            console.log(15);
        }
    }
}

solve('Sunday', 'Fitness', 22.00);