// Global Variables
let citySearchEl = document.querySelector(".city-search");
let searchBtnEl = document.querySelector("#search-btn");
let currentStatsContainer = document.querySelector("#current-container");
let cityLocEl = document.querySelector("#city");
let tempEl = document.querySelector("#temperature");
let windEl = document.querySelector("#wind-speed");
let humidityEl = document.querySelector("#humidity-index");
let uvEl = document.querySelector("#uv-index");
let forecastContainer = document.querySelector('#forecast-container')
let forecastHeader = document.querySelector('#forecast-header')

let apiUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=37.4220654&lon=-77.5919132&exclude={part}&appid=ce3ea99243436a20c2bd7cb3a616452d'

// time variables
let d = new Date().getDate();
let m = new Date().getMonth() + 1;
let y = new Date().getFullYear();









fetch(apiUrl).then(function(response) {
  if (response.ok) {
    console.log(response)
  } else {
  alert("Error: unable to connect")
}
})



// id="current-conditions">
// <h1 id="city"></h1>
// <p id="temperature"></p>
// <p id="wind-speed"></p>
// <p id="humidity-index"></p>
// <p id="uv-index"></p>

