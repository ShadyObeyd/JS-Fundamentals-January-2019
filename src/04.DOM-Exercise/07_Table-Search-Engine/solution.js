function solve() {
    let button = document.getElementById('searchBtn');
    let selectedRowsIndexes = [];

    button.addEventListener('click', () => {
        let tableRows = Array.from(document.getElementsByTagName('tr'));

        if(selectedRowsIndexes.length > 0){
            for(let index of selectedRowsIndexes){
                let row = tableRows[index];

                row.className = '';
            }
        }

        let input = document.getElementById('searchField').value;

        if(input === ''){
            return;
        }

        for (let i = 2; i < tableRows.length; i++) {
            let row = tableRows[i];

            let rowChildren = Array.from(row.children);

            for (let j = 0; j < rowChildren.length; j++) {
                let rowElementValue = rowChildren[j].textContent;

                if(rowElementValue.toLowerCase().includes(input.toLowerCase())){
                    row.className = 'select';
                    selectedRowsIndexes.push(tableRows.indexOf(row));
                    break;
                }
            }
        }

        document.getElementById('searchField').value = '';
    });
}