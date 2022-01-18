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
	let currentSpan = document.createElement("span");
	currentSpan.setAttribute = ("style", "display:flex align-items:center");

	// create h2 element
	let currentHeader = document.createElement("h2");
	currentHeader.setAttribute("style", "display:inline");
	currentHeader.setAttribute("id", "cityName");
	currentHeader.setAttribute("class", "display-4");

	// create img
	let currentIcon = document.createElement("img");
	currentIcon.setAttribute("style", "display:inline");
	currentIcon.setAttribute("id", "symbolEl");

	// append elements to container
	currentSpan.appendChild(currentHeader);
	currentSpan.appendChild(currentIcon);
	currentStatsContainer.appendChild(currentSpan);

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

  // logic to set uv background color 
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

  // add stats elements to stats container
	currentStatsContainer.appendChild(tempEl);
	currentStatsContainer.appendChild(windEl);
	currentStatsContainer.appendChild(humidityEl);
	currentStatsContainer.appendChild(uvEl);
};

let displayForecast = function (data) {
	// clear previous data
	forecastContainer.textContent = "";
	forecastHeader.textContent = "";

	// create header element
	forecastHeader.textContent = "5-Day Forecast:";

	for (i = 0; i < 5; i++) {
		let forecastCard = document.createElement("div");
		forecastCard.setAttribute(
			"class",
			"col-12 col-md-6 col-lg-2 border border-info rounded p-1"
		);
		forecastCard.setAttribute("style", "background-color: orange");

		let forecastDate = document.createElement("h5");
		forecastDate.textContent = "(" + m + "/" + (d + (i + 1)) + "/" + y + ")";

		let forecastSymbol = document.createElement("img");
		forecastSymbol.setAttribute(
			"src",
			"https://openweathermap.org/img/wn/" +
				data.daily[i].weather[0].icon +
				".png"
		);

		let weeklyTemp = document.createElement("p");
		weeklyTemp.textContent = "Temp: " + data.daily[i].temp.day + " °F";

		let weeklyWind = document.createElement("p");
		weeklyWind.textContent = "Wind: " + data.daily[i].wind_speed + " MPH";

		let weeklyHumidity = document.createElement("p");
		weeklyHumidity.textContent = "Humidity: " + data.daily[i].humidity + " %";

		// Append elements to cards
		forecastCard.appendChild(forecastDate);
		forecastCard.appendChild(forecastSymbol);
		forecastCard.appendChild(weeklyTemp);
		forecastCard.appendChild(weeklyWind);
		forecastCard.appendChild(weeklyHumidity);

		forecastContainer.appendChild(forecastCard);
	}
};