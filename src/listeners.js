searchBtn.addEventListener("click", () => {
    console.log("HERE");
    getCordinates(city.value).then((data) => {
        getWeatherData(data[0], data[1]).then((weatherinfo) => {
            console.log(weatherinfo.main.temp);
            // console.log(weatherinfo);
            console.log(data[2]);
        });
    });
});
