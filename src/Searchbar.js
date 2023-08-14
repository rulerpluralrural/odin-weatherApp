export async function getLocation() {
	const weatherContainer = document.querySelector("#weather-info");
	const weatherDescription = document.querySelector(
		"#weather-info-description",
	);
	const weatherLocation = document.querySelector("#weather-info-location");
	const weatherDate = document.querySelector("#weather-info-date");
	const weatherTime = document.querySelector("#weather-info-time");
	const weatherImg = document.querySelector("#weather-img");
	const weatherTemp = document.querySelector("#weather-info-temp");
	const APIkey = "ced9945140ee4935aff131139231208";
	// @ts-ignore
	const location = document.querySelector("#search-input input").value;

	if (location === "") return;

	const response = await fetch(
		`http://api.weatherapi.com/v1/current.json?key=${APIkey}&q=${location}&aqi=no`,
	)
		.then((response) => response.json())
		.then((json) => {});
}
