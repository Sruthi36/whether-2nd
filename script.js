const inputBox = document.getElementById('input');
const searchBtn = document.getElementById('searchBtn');
let weatherImg = document.getElementById('weatherImage');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const humidity = document.getElementById("humidty");
const wind_speed = document.getElementById("wind-speed");
let humidityDiscriptionEl = document.getElementById("humidityDiscription");
let windSpeedDiscriptionEl = document.getElementById("windSpeedDiscription");
let locationNotFoumdEl = document.getElementById("locationNotFoumd");

let weatherBodyEl = document.getElementById("weatherBody");

async function checkWeather(city) {

    const api_key = "33d5d380d8497f7c871f6ad17f57c764"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
    const weather_data = await fetch(`${url}`).then(response => response.json());

    if (weather_data.cod === '404') {
        locationNotFoumdEl.style.display = "flex";
        weatherBodyEl.style.display = "none";
        return;
    }
    locationNotFoumdEl.style.display = "none";
    weatherBodyEl.style.display = "flex";
    temperature.textContent = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.textContent = `${weather_data.weather[0].description}`;
    humidity.textContent = `${weather_data.main.humidity}%`;
    wind_speed.textContent = `${weather_data.wind.speed}Km/H`;



    if (weather_data.weather[0].main === "Clouds") {
        weatherImg.src = "https://res.cloudinary.com/aniket-shinde/image/upload/v1691660529/cloud_ehgsuk.png";
    }
    if (weather_data.weather[0].main === "Clear") {
        weatherImg.src = "https://res.cloudinary.com/aniket-shinde/image/upload/v1691660568/clear_vn6py3.png";
    }
    if (weather_data.weather[0].main === "Rain") {
        weatherImg.src = "https://res.cloudinary.com/aniket-shinde/image/upload/v1691660550/rain_eidt3n.png";
    }

    if (weather_data.weather[0].main === "Mist") {
        weatherImg.src = "https://res.cloudinary.com/aniket-shinde/image/upload/v1691660558/mist_iyg347.png";
    }


    if (weather_data.weather[0].main === "Snow") {
        weatherImg.src = "https://res.cloudinary.com/aniket-shinde/image/upload/v1691660541/snow_thjheq.png";
    }

    if (weather_data.weather[0].main === "Haze") {
        weatherImg.src = "https://res.cloudinary.com/aniket-shinde/image/upload/v1691681401/haze_1_whcvpd.png";
    }

}

searchBtn.addEventListener('click', () => {
    checkWeather(inputBox.value);
})