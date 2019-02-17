function solve(examPoints, homeworks, totalHomework) {
    let grade;

    if(examPoints === 400){
        grade = 6;
    }
    else {
        let totalPoints = (((examPoints / 400) * 100)) * 0.9;

        if(homeworks === totalHomework){
            totalPoints += 10;
        }
        else {
            let bonusPoints = (homeworks / totalHomework) * 10;
            totalPoints += bonusPoints;
        }

        grade = 3 + 2 * (totalPoints - 100 / 5) / (100 / 2);
    }

    if(grade < 3){
        grade = 2;
    }

    if(grade > 6){
        grade = 6;
    }

    console.log(grade.toFixed(2));
}

solve(300, 10, 10);