import * as basic from "./basic";

const weatherNow = document.querySelector(".weather-card");
const detailsRowOne = document.getElementById("first-row");
const detailsRowtwo = document.getElementById("second-row");

function updateWeatherNow(data) {
    const dataDiv = createNowDiv(data);
    weatherNow.append(createrHeader(data.name), dataDiv);
    weatherNow.classList.add("visible");
    createDetails(data);
}

function createNowDiv(data) {
    const allData = document.createElement("div");
    allData.className = "weather-info-now";

    const temp = document.createElement("div");
    temp.textContent = `${String(Math.round(data.main.temp))}°`;
    temp.className = "temp";

    const tempHigh = document.createElement("div");
    tempHigh.textContent = `H: ${String(Math.round(data.main.temp_max))}°`;

    const tempLow = document.createElement("div");
    tempLow.textContent = `L: ${String(Math.round(data.main.temp_min))}°`;

    const weather = document.createElement("div");
    weather.className = "weather";

    const weatherStatus = document.createElement("div");
    weatherStatus.textContent = data.weather[0].main;
    weatherStatus.className = "weather-status";

    const icon = document.createElement("img");
    icon.className = "icon";
    icon.src = createIconLink(data.weather[0].icon);

    weather.append(weatherStatus, icon);

    const highLow = document.createElement("div");
    highLow.append(tempHigh, tempLow);
    highLow.className = "high-low";

    allData.append(
        weather,
        temp,
        highLow,
    );

    return allData;
}

function createDetails(data) {
    const filteredData = basic.exportDetails(data);

    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(filteredData)) {
        const col = document.createElement("div");
        col.className = "col";

        const name = document.createElement("div");
        name.className = "weather-key";
        name.textContent = key;

        const paramter = document.createElement("div");
        paramter.className = "weather-value";
        paramter.textContent = value;

        col.append(name, paramter);
        detailsRowOne.append(col);
    }
}

function clearPreviousCity() {
    weatherNow.innerHTML = "";
    document.getElementById("city").value = "";
}

function getDataForm() {
    let city = document.getElementById("city");
    if (city) {
        city = basic.clearInput(city.value);
        return city;
    }
    return "";
}

function createrHeader(cityname) {
    const header = document.createElement("div");
    header.className = "card-header";
    header.innerHTML = cityname;

    return header;
}

function createIconLink(iconnum) {
    return `https://openweathermap.org/img/wn/${iconnum}.png`;
}

export {
    updateWeatherNow,
    clearPreviousCity,
    getDataForm,
};





