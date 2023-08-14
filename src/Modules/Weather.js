const weather = (() => {
	async function getData(location) {
		try {
			const APIkey = "ced9945140ee4935aff131139231208";
			const response = await fetch(
				`http://api.weatherapi.com/v1/forecast.json?key=${APIkey}&q=${location}&days=1&aqi=no&alerts=no`,
				{
					mode: "cors",
					headers: {
						"Access-Control-Allow-Origin": "*",
					},
				},
			);
			if (!response.ok) throw new Error(`${location} not found`);
			const data = await response.json();
			return data;
		} catch (error) {
			alert(error);
		}
	}
	return { getData };
})();

export default weather;
