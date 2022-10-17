const itemCounter = document.querySelector('.refresh-item-counter');

let counter = 601;

let interval = setInterval(() => {
    (function countdown(){
        if(counter > 0) {
            counter--;
            itemCounter.innerHTML = counter;
        } else {
            
            if(confirm('Deseja permanecer logado?') == true) {
                clearInterval(interval);
                location.reload();
            } else {
                clearInterval(interval);
                window.location.href = '../index.html';
                localStorage.clear();
            }
            
        }
    }())
},1000)




