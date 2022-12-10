function clearInput(text) {
    const city = text.toString();
    // remove whitespaces
    city.replace(" ", "");
    return city;
}

function exportDetails(data) {
    return {
        sunrise: (new Date((data.sys.sunrise + data.timezone) * 1000)),
        sunset: (new Date((data.sys.sunset + data.timezone) * 1000)),
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        visability: data.visibility,
        wind: data.wind.speed,
    };
}


export {
    clearInput,
    exportDetails,
};
