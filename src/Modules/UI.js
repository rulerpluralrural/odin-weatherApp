import { format } from "date-fns";

const ui = (() => {
	function viewApp(data) {
		if (!data) return;

		const appContainer = document.getElementById("app");
		const weatherContainer = document.getElementById("weather-info");
		const weatherErrorContainer = document.getElementById("weather-info-error");
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
		weatherErrorContainer.style.display = "none";
		weatherContainer.style.display = "flex";
		weatherContainer.classList.add("fadeIn");

		weatherDescription.textContent = data.current.condition.text;
		weatherLocation.textContent = data.location.name;
		weatherDate.textContent = formatDate(new Date(data.location.localtime));
		weatherTime.textContent = getTime(new Date(data.location.localtime));
		weatherImg.src = data.current.condition.icon;
		weatherTemp.textContent = `${data.current.temp_c}°C`;

		feelsLikeDetails.textContent = `${data.current.feelslike_c}°C`;
		humidity.textContent = `${data.current.humidity}%`;
		rain.textContent = `${data.forecast.forecastday[0].day.daily_chance_of_rain}%`;
		wind.textContent = `${data.current.wind_kph}km/h`;

		console.log(data);

		const changeTempButton = document.querySelector("#change-temp");
		changeTempButton.addEventListener("click", () => {
			if (changeTempButton.textContent === "°F") {
				weatherTemp.textContent = `${toFahrenheit(data.current.temp_c)}°F`;
				feelsLikeDetails.textContent = `${toFahrenheit(data.current.temp_c)}°F`;
				changeTempButton.textContent = "°C";
			} else if (changeTempButton.textContent === "°C") {
				weatherTemp.textContent = `${data.current.temp_c}°C`;
				feelsLikeDetails.textContent = `${data.current.feelslike_c}°C`;
				changeTempButton.textContent = "°F";
			}
		});
	}

	function appError() {
		const weatherErrorContainer = document.getElementById("weather-info-error");
		const weatherContainer = document.getElementById("weather-info");
		const appContainer = document.getElementById("app");
		const errorIcon = document.querySelector('.fa-triangle-exclamation')

		appContainer.style.width = "1000px";
		weatherContainer.style.display = "none";
		weatherErrorContainer.style.display = "flex";
		weatherErrorContainer.classList.add("fadeIn");
		errorIcon.classList.add('shake')
	}

	function formatDate(date) {
		const newDate = format(date, "MMM dd,yyyy");
		return newDate;
	}

	function getTime(date) {
		const newTime = format(date, "hh:mm a");
		return newTime;
	}

	function toFahrenheit(temp) {
		return (temp * 9) / 5 + 32;
	}

	return { viewApp, appError };
})();

export default ui;
