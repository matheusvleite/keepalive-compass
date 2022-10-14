// VARIABLES

const userInput = document.querySelector('#user'); // INPUT USER
const passwordInput = document.querySelector('#password'); // INPUT PASSWORD
const formLogin = document.querySelector('.welcome__main-form'); // FORM

const userKey = [] = JSON.parse(localStorage.getItem('key')) || []; // GETTING CREDENTIALS FROM LOCALSTORAGE TO KEEP LOGGED IN

// FUNCTIONS

function auth() { // AUTH THE CREDENCIALS AND CHECKING IF IT'S CORRECT
    
    userKey.forEach(user => {
        if(user.userValue === 'admin' && user.passwordValue === 'admin') {
            window.location.href = 'pages/home.html';
            localStorage.setItem('key', JSON.stringify(userKey));
        } else {
            userInput.classList.add('warning');
            passwordInput.classList.add('warning');
            const error = document.querySelector('.warning-text');
            error.textContent = 'Ops, usuário ou senha inválidos. Tente novamente!';
        }
    });

}

auth(userKey);

// EVENTS 

formLogin.addEventListener('submit', (e) => { // EVENT SUBMIT GETTING VALUES OF INPUT AND CALL FUNCTION AUTH
    e.preventDefault();

    const userValue = userInput.value;
    const passwordValue = passwordInput.value;

    userKey.push({userValue, passwordValue}); // PUSHING THE ARRAY TO CHECK THE CREDENTIALS
    auth();
});

