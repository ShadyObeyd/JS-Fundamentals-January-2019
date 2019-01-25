function register() {
    let usernameInput = document.getElementById('username').value;
    let emailInput = document.getElementById('email').value;
    let passwordInput = document.getElementById('password').value;

    let regex = /(.+)@(.+).(com|bg)/gm;

    if(usernameInput === '' || passwordInput === '' || !emailInput.match(regex)){
        return;
    }

    let section = document.getElementById('result');

    let h1 = document.createElement('h1');

    h1.textContent = 'Successful Registration!';

    section.appendChild(h1);

    section.innerHTML += `Username: ${usernameInput}`;
    section.appendChild(document.createElement('br'));
    section.innerHTML += `Email: ${emailInput}`;
    section.appendChild(document.createElement('br'));
    section.innerHTML += `Password: ${'*'.repeat(passwordInput.length)}`;

    setTimeout(() => {
        section.innerHTML = '';
    }, 5000);
}