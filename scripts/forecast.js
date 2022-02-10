const key = "M9ZxR4QUpJKAPS2iXrEyEecD6aXWjukp";

const getCity = async (city) => {
    const base =
        "http://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    // console.log(data);
    return data[0];
};

getCity("kathmandu")
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });
