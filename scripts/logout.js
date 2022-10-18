const logout = document.querySelector('.item-logout'); // GET BUTTON

logout.addEventListener('click', () => {
    if(confirm('Você deseja fazer o logout?') == true) { // ALERT IF YOU WANT CONTINUE IN PAGE
        window.location.href = '../index.html';
        localStorage.clear('key'); // CLEAR LOCALSTORAGE
    }
})