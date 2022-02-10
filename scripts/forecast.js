const key = "eA0yMqU6S9t6BGoDu3q8T0f4FBvYY5lR";

// get weather information
const getWeather = async (id) => {
    const base = "http://dataservice.accuweather.com/currentconditions/v1/";
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};

// get city information
const getCity = async (city) => {
    const base =
        "http://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();
    // console.log(data);

    return data[0];
};
