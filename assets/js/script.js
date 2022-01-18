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
let pastSearchList = document.querySelector('#past-search-list')
let pastSearchTitle = document.querySelector('#past-search-title')


let apiUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=37.4220654&lon=-77.5919132&exclude={part}&appid=ce3ea99243436a20c2bd7cb3a616452d'

// time variables
const d = new Date().getDate();
const m = new Date().getMonth() + 1;
const y = new Date().getFullYear();

// variable that holds function to display current weather conditions
let displayCurrConditions = function (cityName, data) {
	//clear previous data
	currentStatsContainer.textContent = "";

	// create current day span element
	let dailySpan = document.createElement("span");
	dailySpan.setAttribute = ("style", "display:flex align-items:center");

	// create h2 element
	let dailyHeader = document.createElement("h2");
	dailyHeader.setAttribute("style", "display:inline");
	dailyHeader.setAttribute("id", "cityName");
	dailyHeader.setAttribute("class", "display-4");

	// create img
	let dailyIcon = document.createElement("img");
	dailyIcon.setAttribute("style", "display:inline");
	dailyIcon.setAttribute("id", "symbolEl");

	// append elements to container
	dailySpan.appendChild(dailyHeader);
	dailySpan.appendChild(dailyIcon);
	currentStatsContainer.appendChild(dailySpan);

	let symbolEl = document.getElementById("symbolEl");
	let cityNameEl = document.getElementById("cityName");

	// display current stats to upper right side of page
	symbolEl.setAttribute(
		"src",
		"http://openweathermap.org/img/wn/" +
			data.current.weather[0].icon +
			"@2x.png"
	);
	cityNameEl.textContent = cityName + " (" + m + "/" + d + "/" + y + ") ";

	let tempEl = document.createElement("p");
	tempEl.textContent = "Temp: " + data.current.temp + " °F";

	let windEl = document.createElement("p");
	windEl.textContent = "Wind: " + data.current.wind_speed + " MPH";

	let humidityEl = document.createElement("p");
	humidityEl.textContent = "Humidity: " + data.current.humidity + " %";

	let uvEl = document.createElement("span");
	uvEl.textContent = "UV Index: " + data.current.uvi;
	uvEl.setAttribute(
		"class",
		"p-2 col-6 col-md-3 col-lg-2 col-xxl-1 border border-primary rounded"
	);

	if (data.current.uvi <= 2.5) {
		uvEl.setAttribute("style", "background-color: red; color: white");
	} else if (data.current.uvi <= 5) {
		uvEl.setAttribute("style", "background-color: yellow;");
	} else if (data.current.uvi <= 7.5) {
		uvEl.setAttribute("style", "background-color: orange;");
	} else if (data.current.uvi <= 10) {
		uvEl.setAttribute("style", "background-color: crimson; color: white;");
	} else {
		uvEl.setAttribute("style", "background-color: fuchsia;");
	}

	currentStatsContainer.appendChild(tempEl);
	currentStatsContainer.appendChild(windEl);
	currentStatsContainer.appendChild(humidityEl);
	currentStatsContainer.appendChild(uvEl);
};

