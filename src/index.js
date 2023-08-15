import weather from "./Modules/Weather";
import ui from "./Modules/UI";

const searchWeather = document.querySelector("#search-weather");
const loadingState = document.querySelector(".overlay");
/**
 * @type {HTMLInputElement}
 */
const searchInput = document.querySelector("#search-input");

searchWeather.addEventListener("submit", async (e) => {
	e.preventDefault();
	const weatherContainer = document.getElementById("weather-info");

	if (!searchInput.value) return;
	weatherContainer.classList.remove("fadeIn");

	loadingState.classList.add("loading");
	const weatherData = await weather.getData(searchInput.value);
	loadingState.classList.remove("loading");
	ui.viewApp(weatherData);
});

