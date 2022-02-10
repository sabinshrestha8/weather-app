// get the reference to the form
const cityForm = document.querySelector("form");

const updateCity = async (city) => {
    const cityDetails = await getCity(city);
    const weather = await getWeather(cityDetails.Key);

    return {
        /* object shorthand notation 
        i.e. we can write it only once if the property & value is same */
        cityDetails,
        weather,
    };
};

cityForm.addEventListener("submit", (e) => {
    // prevent default action
    e.preventDefault();

    // get the input field & then its value
    const city = cityForm.city.value.trim();

    // clear out the form field
    cityForm.reset();

    // update the ui with new city invoking updateCity() passing city as an argument
    updateCity(city)
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        });
});
