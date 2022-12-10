import * as apifunctions from "./apifunctions";
import * as domfunctions from "./domfunctions";


const searchBtn = document.querySelector("[data-search-button]");


async function getWeatherInfo() {
    try {
        const cityname = domfunctions.getDataForm();
        if (cityname === "") {
            return;
        }
        const info = await apifunctions.getCityInfo(cityname);
        const data = await apifunctions.getWeatherNow(info.lat, info.lon, "day");

        domfunctions.clearPreviousCity();
        domfunctions.updateWeatherNow(data);
    } catch (err) {
        console.log("Erroe", err);
        // make a div visible where the error is diplayed
    }
}


// Search for the city
searchBtn.addEventListener("click", () => {
    getWeatherInfo();
});

document.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        getWeatherInfo();
    }
});
