// HOUR

setInterval(() => {

    let dataCurrent = new Date();

    function fix(number) {
        if (number < 10) {
            number = "0" + number
        }
        return number;
    }
    document.querySelector('.menu__widgets-hour').innerHTML =
        (fix(dataCurrent.getHours()) + ':' + fix(dataCurrent.getMinutes()));

    //DATE

    mouth = new Array('Janeiro', 'Fevereiro',
        'Março', 'Abril', 'Maio', 'Junho', 'Julho',
        'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro');

    day = new Array('Domingo', 'Segunda-feira', 'Terça-feira',
        'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado');

    document.querySelector('.menu__widget-date').innerHTML = day[dataCurrent.getDay()] + ', ' +
        (fix(dataCurrent.getDate()) + ' de ' + mouth[dataCurrent.getMonth()] + ' de ' + dataCurrent.getFullYear());
}, 1000);




