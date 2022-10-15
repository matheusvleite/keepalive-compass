// LOCATION AND WEATHER

setInterval(() => { // UPDATE LOCATION IN REAL TIME IF ALLOWED

    navigator.geolocation.getCurrentPosition(locationSucess, locationDenied); // GET POSITION

    function locationSucess(position) {  // GET LATITUDE AND LONGITUDE

        let lat = position.coords.latitude;
        let long = position.coords.longitude;

        coordsResult(lat, long);
    }

    function locationDenied() { // ERROR LOCATION DENIED

        document.querySelector('.menu__widget-location').innerHTML = 'Permita buscar sua localização...';
    }

    function coordsResult(lat, long) { // API WEATHER

        const URL = `https://api.weatherapi.com/v1/current.json?key=6760aebf970b4241a42190241221310&q=${lat},${long}`;
        axios.request(URL)
            .then(response => display(response.data))
            .catch(erro => console.log(erro.message));
    }

    function display(response) { // SHOW RESULTS OF API

            switch (response.location.region) {
                case 'Acre': response.location.region = 'AC'; break;
                case "Alagoas": response.location.region = "AL"; break;
                case "Amazonas": response.location.region = "AM"; break;
                case "Amapa": response.location.region = "AP"; break;
                case "Bahia": response.location.region = "BA"; break;
                case "Ceara": response.location.region = "CE"; break;
                case "Distrito Federal": response.location.region = "DF"; break;
                case "Espirito Santo": response.location.region = "ES"; break;
                case "Goias": response.location.region = "GO"; break;
                case "Maranhao": response.location.region = "MA"; break;
                case "Minas Gerais": response.location.region = "MG"; break;
                case "Mato Grosso do Sul": response.location.region = "MS"; break;
                case "Mato Grosso": response.location.region = "MT"; break;
                case "Para": response.location.region = "PA"; break;
                case "Paraiba": response.location.region = "PB"; break;
                case "Pernambuco": response.location.region = "PE"; break;
                case "Piaui": response.location.region = "PI"; break;
                case "Parana": response.location.region = "PR"; break;
                case "Rio de Janeiro": response.location.region = "RJ"; break;
                case "Rio Grande do Norte": response.location.region = "RN"; break;
                case "Rondonia": response.location.region = "RO"; break;
                case "Roraima": response.location.region = "RR"; break;
                case "Rio Grande do Sul": response.location.region = "RS"; break;
                case "Santa Catarina": response.location.region = "SC"; break;
                case "Sergipe": response.location.region = "SE"; break;
                case "Sao Paulo": response.location.region = "SP"; break;
                case "Tocantins": response.location.region = "TO"; break;
            }

        document.querySelector('.menu__widget-location').innerHTML = `${response.location.name} - ${response.location.region}`;
        document.querySelector('.widget-weather-temp').innerHTML = `${response.current.temp_c}º`;
        document.querySelector('.widget-weather-icon').setAttribute('src', `${response.current.condition.icon}`);
    }
}, 2000)
