// LOCATION AND WEATHER

setInterval(() => { // UPDATE LOCATION IN REAL TIME IF ALLOWED

navigator.geolocation.getCurrentPosition(locationSucess,locationDenied); // GET POSITION

function locationSucess(position) {  // GET LATITUDE AND LONGITUDE

    let lat = position.coords.latitude;
    let long = position.coords.longitude;

    coordsResult(lat,long);
}

function locationDenied() { // ERROR LOCATION DENIED

    document.querySelector('.menu__widget-location').innerHTML = 'Geolocalização negada pelo usuário.';
}

function coordsResult(lat,long) { // API WEATHER

    const URL = `https://api.weatherapi.com/v1/current.json?key=6760aebf970b4241a42190241221310&q=${lat},${long}`;
    axios.request(URL)
    .then(response => display(response.data))
    .catch(erro => console.log(erro.message));
}

function display(response) { // SHOW RESULTS OF API
    
    document.querySelector('.menu__widget-location').innerHTML = `${response.location.name} - ${response.location.region}`;
    document.querySelector('.widget-weather-temp').innerHTML = `${response.current.temp_c}º`;
    document.querySelector('.widget-weather-icon').setAttribute('src', `${response.current.condition.icon}`);
}
},2000)
