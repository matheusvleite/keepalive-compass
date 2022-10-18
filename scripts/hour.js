// HOUR

setInterval(() => { // INTERVAL FOR CURRENT TIME

    let dataCurrent = new Date();

    function fix(number) { // FIX IF HOUR NUMBER OR DATE NUMBER < 10
        if (number < 10) {
            number = "0" + number
        }
        return number;
    }
    document.querySelector('.menu__widgets-hour').innerHTML =
        (fix(dataCurrent.getHours()) + ':' + fix(dataCurrent.getMinutes())); // GET ELEMENT AND ADDED HOURS

    //DATE

    mouth = new Array('Janeiro', 'Fevereiro', // MOUTH FOR FIX
        'Março', 'Abril', 'Maio', 'Junho', 'Julho',
        'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro');

    day = new Array('Domingo', 'Segunda-feira', 'Terça-feira', // DAY FOR FIX
        'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado');

    document.querySelector('.menu__widget-date').innerHTML = day[dataCurrent.getDay()] + ', ' + // GET ELEMENT AND ADDED DATE
        (fix(dataCurrent.getDate()) + ' de ' + mouth[dataCurrent.getMonth()] + ' de ' + dataCurrent.getFullYear());
}, 1000);




