const submitBtn = document.querySelector("#submit-btn");
const searchDiv = document.querySelector("#search-hist");
const cityName = document.querySelector("#city-name");
const weatherDiv = document.querySelector('#current-weather')
const apiKey = '6033dc9f9b191ae2855b71b9c8996bcb';

var citySearch = function(event) {
    event.preventDefault();

    var city = $(this).children().val().trim();

    if (city === null || city === "") {
        alert("Please enter a valid city name");
    } else {
        $("<button></button>").text(city).addClass("btn btn-secondary btn-block mt-2 mb-2").appendTo("#search-hist");
        localStorage.setItem('City'+ [city], city);

    }
    fetchWeather(city);
    fetchForecast(city);
};


var fetchWeather = function(cityName) {
    weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=imperial&appid=' + apiKey;
    fetch(weatherUrl)
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        displayWeather(response);
    });
};


var fetchForecast = function(cityName) {
    forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&units=imperial&appid=' + apiKey;
    fetch(forecastUrl)
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        displayForecast(response);
    });
};

var displayWeather = function(response) {
    console.log(response.name);
    var cityNm = response.name
    $("<h2></h2>").text(cityNm).appendTo(weatherDiv);
    var ul = $("<ul></ul>").appendTo(weatherDiv);
    $("<li></li>").text('Temp: ' + response.main.temp).appendTo(ul);
    $("<li></li>").text('Humidity: ' + response.main.humidity).appendTo(ul);
    $("<li></li>").text('Wind: ' + response.wind.speed).appendTo(ul);
};

var displayForecast = function(response) {
    console.log(response.list);
};


// $("<button></button>").addClass("btn btn-secondary btn-block mt-2 mb-2").appendTo("#search-hist").val(localStorage.getItem('CityPhoenix'));

submitBtn.addEventListener("submit", citySearch)
