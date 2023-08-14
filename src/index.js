import weather from "./Modules/Weather";
import ui from "./Modules/UI";

const searchWeather = document.querySelector("#search-weather");
/**
 * @type {HTMLInputElement}
 */
const searchInput = document.querySelector("#search-input");

searchWeather.addEventListener("submit", async (e) => {
	e.preventDefault();
	const weatherContainer = document.getElementById("weather-info");

	if (!searchInput.value) return;
	weatherContainer.classList.remove("fadeIn");

	const weatherData = await weather.getData(searchInput.value);
	ui.viewApp(weatherData);
});

// searchButton.addEventListener("click", async () => {
// 	const weatherContainer = document.getElementById("weather-info");

// 	if (!searchInput.value) return;
// 	weatherContainer.classList.remove("fadeIn");

// 	const weatherData = await weather.getData(searchInput.value);
// 	ui.viewApp(weatherData);
// });

// searchInput.addEventListener("input", async () => {
// 	const weatherContainer = document.getElementById("weather-info");

// 	if (!searchInput.value) return;
// 	weatherContainer.classList.remove("fadeIn");

// 	const weatherData = await weather.getData(searchInput.value);
// 	ui.viewApp(weatherData);
// });
