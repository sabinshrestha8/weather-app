// get the reference to the form
const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const time = document.querySelector(".time");
const icon = document.querySelector(".icon img");

const updateUI = (data) => {
    console.log(data);
    // const cityDetails = data.cityDetails;
    // const weather = data.weather;

    /* destructure properties */
    // get properties from an object & store them in a constant of the same name
    const { cityDetails, weather } = data;

    // update details template
    details.innerHTML = `
        <h5 class="my-3">${cityDetails.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `;

    // update the night/day & icon images

    // update weather icons dynamically using template string
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute("src", iconSrc);

    // overwrite the img a/c to location time(Day || Night)
    let timeSrc = null;
    if (weather.IsDayTime) {
        timeSrc = "img/day.svg";
    } else {
        timeSrc = "img/night.svg";
    }

    time.setAttribute("src", timeSrc);

    // remove the d-none class if present
    if (card.classList.contains("d-none")) {
        card.classList.remove("d-none");
    }
};

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
            // console.log(data);
            updateUI(data);
        })
        .catch((err) => {
            console.log(err);
        });
});
