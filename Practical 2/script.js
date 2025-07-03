let weathers = {
    Ahmedabad: 40,
    Mumbai: 35,
    Delhi: 30,
    Kolkata: 32,
    Chennai: 44,
}
function getweather() {
    let city = document.getElementById('location-input').value.trim();
    weatherupdate(city);
}
function weatherupdate(city) {
    if (city in weathers) {
        document.getElementById("weather-result").innerHTML = `The weather in ${city} is ${weathers[city]}°C`;
    }
    else {
        document.getElementById("weather-result").innerHTML = `Weather information for ${city} is not available.`;
    }
}