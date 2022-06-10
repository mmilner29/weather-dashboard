const submitBtn = document.querySelector("#submit-btn");
const searchDiv = document.querySelector("#search-hist");
const cityName = document.querySelector("#city-name");
const weatherDiv = document.querySelector('#current-weather')
const apiKey = '6033dc9f9b191ae2855b71b9c8996bcb';

const cardOne = document.querySelector("#day-1");
const cardTwo = document.querySelector("#day-2");
const cardThree = document.querySelector("#day-3");
const cardFour = document.querySelector("#day-4");
const cardFive = document.querySelector("#day-5");


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

//featch weather from weather api

var fetchWeather = function(cityName) {
    weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=imperial&appid=' + apiKey;
    fetch(weatherUrl)
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        if (weatherDiv.h2 != 'undefined' && weatherDiv.h2 != null){
            // console.log('empty');
        } else {
            weatherDiv.innerHTML = "";
        }
        displayWeather(response);
    });
};

//fetch forcast from weather api
var fetchForecast = function(cityName) {
    forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&units=imperial&appid=' + apiKey;
    fetch(forecastUrl)
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        if (cardOne.h3 != 'undefined' && cardOne.h3 != null){
            console.log('empty');
        } else {
            cardOne.innerHTML = "";
        }
        if (cardTwo.h3 != 'undefined' && cardTwo.h3 != null){
            console.log('empty');
        } else {
            cardTwo.innerHTML = "";
        }
        if (cardThree.h3 != 'undefined' && cardThree.h3 != null){
            console.log('empty');
        } else {
            cardThree.innerHTML = "";
        }
        if (cardFour.h3 != 'undefined' && cardFour.h3 != null){
            console.log('empty');
        } else {
            cardFour.innerHTML = "";
        }
        if (cardFive.h3 != 'undefined' && cardFive.h3 != null){
            console.log('empty');
        } else {
            cardFive.innerHTML = "";
        }
        displayForecast(response);
    });
};

//display weather on page
var displayWeather = function(response) {
    // console.log(response.name);
        var cityNm = response.name
        $("<h2></h2>").text(cityNm).appendTo(weatherDiv);
        var ul = $("<ul></ul>").appendTo(weatherDiv);
        $("<li></li>").text('Temp: ' + response.main.temp).appendTo(ul);
        $("<li></li>").text('Humidity: ' + response.main.humidity).appendTo(ul);
        $("<li></li>").text('Wind: ' + response.wind.speed).appendTo(ul);
};

//append forecast to page
var displayForecast = function(response) {
    // console.log(response.list[0].dt_txt);
    $("<h3></h3>").text(response.list[0].dt_txt.slice(0,10)).appendTo(cardOne);
    var ulOne = $("<ul></ul>").appendTo(cardOne);
    $("<li></li>").text('Temp: ' + response.list[0].main.temp).appendTo(ulOne);
    $("<li></li>").text('Humidity: ' + response.list[0].main.humidity).appendTo(ulOne);
    $("<li></li>").text('Wind: ' + response.list[0].wind.speed).appendTo(ulOne);

    $("<h3></h3>").text(response.list[8].dt_txt.slice(0,10)).appendTo(cardTwo);
    var ulTwo = $("<ul></ul>").appendTo(cardTwo);
    $("<li></li>").text('Temp: ' + response.list[8].main.temp).appendTo(ulTwo);
    $("<li></li>").text('Humidity: ' + response.list[8].main.humidity).appendTo(ulTwo);
    $("<li></li>").text('Wind: ' + response.list[8].wind.speed).appendTo(ulTwo);

    $("<h3></h3>").text(response.list[16].dt_txt.slice(0,10)).appendTo(cardThree);
    var ulThree = $("<ul></ul>").appendTo(cardThree);
    $("<li></li>").text('Temp: ' + response.list[16].main.temp).appendTo(ulThree);
    $("<li></li>").text('Humidity: ' + response.list[16].main.humidity).appendTo(ulThree);
    $("<li></li>").text('Wind: ' + response.list[16].wind.speed).appendTo(ulThree);

    $("<h3></h3>").text(response.list[24].dt_txt.slice(0,10)).appendTo(cardFour);
    var ulFour = $("<ul></ul>").appendTo(cardFour);
    $("<li></li>").text('Temp: ' + response.list[24].main.temp).appendTo(ulFour);
    $("<li></li>").text('Humidity: ' + response.list[24].main.humidity).appendTo(ulFour);
    $("<li></li>").text('Wind: ' + response.list[24].wind.speed).appendTo(ulFour);

    $("<h3></h3>").text(response.list[32].dt_txt.slice(0,10)).appendTo(cardFive);
    var ulFive = $("<ul></ul>").appendTo(cardFive);
    $("<li></li>").text('Temp: ' + response.list[32].main.temp).appendTo(ulFive);
    $("<li></li>").text('Humidity: ' + response.list[32].wind.speed).appendTo(ulFive);
};


//event listener for submit btn.

submitBtn.addEventListener("submit", citySearch)
