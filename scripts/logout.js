const logout = document.querySelector('.item-logout');

logout.addEventListener('click', () => {
    if(confirm('Você deseja fazer o logout?') == true) {
        window.location.href = '../index.html';
        localStorage.clear();
    }
})