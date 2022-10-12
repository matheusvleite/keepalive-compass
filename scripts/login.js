// VARIABLES

const userInput = document.querySelector('#user');
const passwordInput = document.querySelector('#password');
const formLogin = document.querySelector('.welcome__main-form');

const userKey = [];

// FUNCTIONS

function auth(user, password) {

    userKey.push({user, password});

    if(user === 'admin' && password === 'admin') {
        window.location.href = 'pages/home.html';
    } else {
        userInput.classList.add('warning');
        passwordInput.classList.add('warning');
        const error = document.querySelector('.warning-text');
        error.textContent = 'Ops, usuário ou senha inválidos. Tente novamente!';
    }
}

// EVENTS 

formLogin.addEventListener('submit', (e) => {
    e.preventDefault();

    const userValue = userInput.value;
    const passwordValue = passwordInput.value;

    auth(userValue, passwordValue)
});

