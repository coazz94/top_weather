import * as apifunctions from "./apifunctions";
import * as basic from "./basic";
import * as domfunctions from "./domfunctions";


const searchBtn = document.querySelector("[data-search-button]");


async function getWeatherInfo() {
    try {
        const cityname = apifunctions.getDataForm();
        if (cityname === "") {
            return;
        }

        const info = await apifunctions.getCityInfo(cityname);
        // let data = await apifunctions.getWeatherNow(48.2083537, 16.3725042, "day");
        let data = await apifunctions.getWeatherNow(info.lat, info.lon, "day");
        data = basic.clearData(data);
        domfunctions.updateWeatherNow(data);
        // show on screen
    } catch (err) {
        console.log("City dosent exist");
        // make a div visible where the error is diplayed
    }
}




// Search for the city
searchBtn.addEventListener("click", () => {
    getWeatherInfo();
});


// console.log([data.weather[0].main,
//     data.weather[0].icon,
//     data.main.temp,
//     data.main.humidity,
//     data.main.temp_min,
//     data.main.temp_max,
//     data.wind.speed,
//     data.clouds.all,
// ]);