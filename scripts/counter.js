const itemCounter = document.querySelector('.refresh-item-counter'); // GET ELEMENT

let counter = 601; // TIME TO START

let interval = setInterval(() => {
    (function countdown(){
        if(counter > 0) {
            counter--;
            itemCounter.innerHTML = counter; // ADDED COUNT DOWN IN ELEMENT HTML
        } else {
            
            if(confirm('Deseja permanecer logado?') == true) { // ALERT IF YOU WANT CONTINUE IN PAGE
                clearInterval(interval);
                location.reload();
            } else {
                clearInterval(interval); 
                window.location.href = '../index.html';
                localStorage.clear('key');
            }
            
        }
    }())
},1000)




