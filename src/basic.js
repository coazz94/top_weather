
function clearInput(text) {
    const city = text.toString();
    // remove whitespaces
    city.replace(" ", "");
    return city;
}

function clearData(data) {
    return [
        data.main.temp,
        data.main.humidity,
        data.main.temp_min,
        data.main.temp_max,
        data.wind.speed,
        data.clouds.all,
    ];
}

export {
    clearInput,
    clearData,
};
