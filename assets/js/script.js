const submitBtn = document.querySelector("#submit-btn");
const searchDiv = document.querySelector("#search-hist");
const cityName = document.querySelector("#city-name");

var fetchWeather = function() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=phoenix&units=imperial&appid=6033dc9f9b191ae2855b71b9c8996bcb")
    console.log('annoyed');
};


var fetchForecast = function() {
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=phoenix&units=imperial&appid=6033dc9f9b191ae2855b71b9c8996bcb")
    console.log("forecast");
};


var citySearch = function(event) {
    event.preventDefault();
    // console.log("search");


    var city = $(this).children().val();

    if (city === null || city === "") {
        alert("Please enter a valid city name");
    } else {
        $("<button></button>").text(city).addClass("btn btn-secondary btn-block mt-2 mb-2").appendTo("#search-hist");
        localStorage.setItem('City'+ [city], city);
    }
    
};

// $("<button></button>").addClass("btn btn-secondary btn-block mt-2 mb-2").appendTo("#search-hist").val(localStorage.getItem('CityPhoenix'));

submitBtn.addEventListener("submit", citySearch)
