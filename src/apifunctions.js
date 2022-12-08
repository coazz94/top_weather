import * as basicfunctions from "./basic";

const apiKey = "b4e1871079ad0d513a2ab9e3069eb9d0";
const createCordLink = (cityName) => `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`;
const createDayLink = (lat, lon) => `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${apiKey}`;
const createFourLink = (lat, lon) => `https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=${lat}&lon=${lon}&appid=${apiKey}`;
// const createLongLink = (lat, lon) => `units=metric&lat=${lat}&lon=${lon}&appid=${apiKey}`;

function Cordinates(lon, lat, name) {
    this.lon = lon;
    this.lat = lat;
    this.name = name;
}

function getDataForm() {
    let city = document.getElementById("city");

    if (city) {
        city = basicfunctions.clearInput(city.value);
        return city;
    }
    return "";
}

async function getWeatherNow(latitude, longitude, type) {
    let link = "";

    if (type === "day") {
        link = createDayLink(latitude, longitude);
    } else if (type === "four") {
        link = createFourLink(latitude, longitude);
    }
    // } else {
    //     link = createLongLink(latitude, longitude);
    // }

    const apiData = await fetch(link);
    const response = await apiData.json();
    return response;
}


async function getCityInfo(cityName) {
    const link = createCordLink(cityName);
    const apiData = await fetch(link);
    const response = await apiData.json();
    const info = new Cordinates(response[0].lon, response[0].lat, response[0].name);
    return info;
}




export {
    getCityInfo,
    getWeatherNow,
    getDataForm,
};
