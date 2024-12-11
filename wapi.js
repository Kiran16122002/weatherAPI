const apiKey = "30386446431f18940ed7abcf43bb7cee";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
let city = document.querySelector(".city");
let temp = document.querySelector(".temp");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");
let inputUser  = document.querySelector(".search input");
let button = document.querySelector(".search button");
let wImage = document.querySelector(".images");

async function weatherUp(cityName) {
    const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);
    const data = await response.json();
    
    if (data.cod === "404") {
        alert("City not found");
        return;
    }

    console.log(data);
    city.innerHTML = data.name;
    temp.innerHTML = Math.round(data.main.temp - 273) + "°C";
    humidity.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + " km/h";

    // Set the image based on weather condition
    switch (data.weather[0].main.toLowerCase()) {
        case "haze":
            wImage.src = "wimages/haze.png";
            break;
        case "clouds":
            wImage.src = "wimages/clouds.png";
            break;
        case "mist":
            wImage.src = "wimages/mist.png";
            break;
        case "snow":
            wImage.src = "wimages/snow.png";
            break;
        case "rain":
            wImage.src = "wimages/rain.png";
            break;
        case "drizzle":
            wImage.src = "wimages/drizzle.png";
            break;
        default:
            wImage.src = "wimages/clear.png"; // Optional: add a default image
            break;
    }

    document.querySelector(".weather").style.display = "block";
}

button.addEventListener('click', () => {
    weatherUp(inputUser .value);
});