import { format } from "date-fns";

const ui = (() => {
	function viewApp(data) {
		const appContainer = document.getElementById("app");
		const weatherContainer = document.getElementById("weather-info");
		const weatherDescription = document.querySelector(
			"#weather-info-description",
		);
		const weatherLocation = document.querySelector("#weather-info-location");
		const weatherDate = document.querySelector("#weather-info-date");
		const weatherTime = document.querySelector("#weather-info-time");
		/**
		 * @type {HTMLImageElement}
		 */
		const weatherImg = document.querySelector("#weather-img");
		const weatherTemp = document.querySelector("#weather-info-temp");
		const feelsLikeDetails = document.querySelector("#feels-like-details");
		const humidity = document.querySelector("#humidity");
		const rain = document.querySelector("#rain");
		const wind = document.querySelector("#wind");

		appContainer.style.width = "1000px";
		weatherContainer.style.display = "flex";
		weatherContainer.classList.add("fadeIn");

		weatherDescription.textContent = data.current.condition.text;
		weatherLocation.textContent = data.location.name;
		weatherDate.textContent = formatDate(new Date(data.location.localtime));
		weatherTime.textContent = getTime(data.location.localtime);
		weatherImg.src = data.current.condition.icon;
		weatherTemp.textContent = `${data.current.temp_c}°C`;

		feelsLikeDetails.textContent = `${data.current.feelslike_c}°C`;
		humidity.textContent = `${data.current.humidity}%`
		rain.textContent = `${data.forecast.forecastday[0].day.daily_chance_of_rain}%`
		wind.textContent = `${data.current.wind_kph}km/h`

		console.log(data);
	}

	function formatDate(date) {
		const newDate = format(date, "MMMM/dd/yyyy");
		return newDate;
	}

	function getTime(date) {
		const newTime = date.split(" ").slice(1);
		console.log(newTime);
		return newTime;
	}

	return { viewApp };
})();

export default ui;
