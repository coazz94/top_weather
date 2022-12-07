const city = document.getElementById("city");
const searchBtn = document.querySelector(".btn");
const apiKey = "b4e1871079ad0d513a2ab9e3069eb9d0";


searchBtn.addEventListener("click", () => {
    const a  =  await getCordinates(city.value);
    console.log(a)

    // getCordinates(city.value).then((data) => {
    //     getWeatherNow(data.lat, data.lon).then((weatherinfo) => {
    //         console.log(weatherinfo.main);
    //     });
    // });
});



async function getWeatherNow(longitude, latitude) {
    const weatherFetchLink = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=`;
    const apiData = await fetch(weatherFetchLink + apiKey);
    const response = await apiData.json();
    return response;
}

async function getCordinates(cityName) {
    const cityCordinatesLink = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=`;
    const apiData = await fetch(cityCordinatesLink + apiKey);
    const response = await apiData.json();
    return {lat: response[0].lon, lon: response[0].lat};
}
