function solve() {
    let namePattern = /\s([A-Z][A-Za-z]*-[A-Z][A-Za-z]*(\.-[A-Z][A-Za-z]*\s|\s))/;
    let airportPattern = /\s([A-Z]{3}\/[A-Z]{3})\s/;
    let flightNumberPattern = /\s([A-Z]{1,3}\d{1,5})\s/;
    let companyPattern = /-\s([A-Z][A-Za-z]*\*[A-Z][A-Za-z]*)\s/;

    let input = document.getElementById('str').value.split(',');

    let textToCheck = input[0];
    let infoToDisplay = input[1].trim();

    let doesntHaveMatch = !namePattern.test(textToCheck) || !airportPattern.test(textToCheck) || !flightNumberPattern.test(textToCheck) ||
        !companyPattern.test(textToCheck);

    let nameResult = textToCheck.match(namePattern)[1].trim().split('-').join(' ');
    let airportResult = textToCheck.match(airportPattern)[1].trim().split('/').join(' to ');
    let companyResult = textToCheck.match(companyPattern)[1].trim().split('*').join(' ');
    let flightResult = textToCheck.match(flightNumberPattern)[1].trim();

    let output;

    if(infoToDisplay === 'all'){
        output = `Mr/Ms, ${nameResult}, your flight number ${flightResult} is from ${airportResult}. Have a nice flight with ${companyResult}.`
    } else if(infoToDisplay === 'flight'){
        output = `Your flight number ${flightResult} is from ${airportResult}.`;
    } else if(infoToDisplay === 'company'){
        output = `Have a nice flight with ${companyResult}.`;
    } else if (infoToDisplay === 'name'){
        output = `Mr/Ms, ${nameResult}, have a nice flight!`;
    }

    let resultElement = document.getElementById('result');
    resultElement.textContent = output;
}