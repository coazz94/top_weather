
const weatherNow = document.querySelector(".card.hour");
const weatherInfo = ["Temperature:", "Humidity:", "Temp-min:", "Temp-max:", "Windspeed:", "Clouds:"]

function updateWeatherNow(data) {
    const dataDiv = createDataDiv(data);
    weatherNow.append(dataDiv);
}


function createDataDiv(data) {
    const allData = document.createElement("div");
    allData.className = "weather";

    for (let i = 0; i < 6; i++) {
        const div = document.createElement("div");
        div.className = "parameter";
        div.textContent = weatherInfo[i];

        const text = document.createElement("div");
        text.textContent = data[i];

        div.appendChild(text);
        allData.append(div);
    }

    // console.log(allData);
    return allData;
}


// make a function to clear the today window
// make a function to update the city text searched
// make a function to clear the input field everytime

export {
    updateWeatherNow,
};
