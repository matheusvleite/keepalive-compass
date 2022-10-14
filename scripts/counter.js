const itemCounter = document.querySelector('.item-counter');

let counter = 601;

function countdown(){
    if(counter > 0) {
        counter--;
        itemCounter.innerHTML = counter;
    } else {
        window.location.href = '../index.html';
    }
}

setInterval('countdown()', 1000);


