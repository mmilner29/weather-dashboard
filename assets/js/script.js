const submitBtn = document.querySelector("#submit-btn");
const searchDiv = document.querySelector("#search-hist");

var fetchWeather = function() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=phoenix&units=imperial&appid=6033dc9f9b191ae2855b71b9c8996bcb")
}

fetchWeather();

var fetchForecast = function() {
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=phoenix&units=imperial&appid=6033dc9f9b191ae2855b71b9c8996bcb")
}

fetchForecast();

var citySearch = function() {
    console.log("search");
};

submitBtn.addEventListener("submit", citySearch())
