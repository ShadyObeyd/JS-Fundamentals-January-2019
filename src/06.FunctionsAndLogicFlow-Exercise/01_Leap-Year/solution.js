function leapYear() {
    let button = document.getElementsByTagName('button')[0];

    button.addEventListener('click', (e) => {
        let targetButton = e.target;
        let year = Number(document.getElementsByTagName('input')[0].value);

        let isLeap = new Date(year, 1, 29).getDate() === 29;

        let h2 = document.getElementById('year').children[0];
        let div = document.getElementById('year').children[1];
        div.textContent = year;

        let result;

        if(isLeap){
            result = 'Leap Year';
        } else {
            result = 'Not Leap Year';
        }

        h2.textContent = result;

        document.getElementsByTagName('input')[0].value = '';
    });
}