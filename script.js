let url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
let apiKey = "75a64c3c947a4b751d896b2da0f60767";

async function getWeatherData(city) {
  try {
    let response = await axios.get(url + city + `&appid=${apiKey}`);
    console.log(response);
    let innichen = response.data.name;
    if (innichen === "Innichen") {
      document.getElementById("city-name").innerHTML = "India";
    } else {
      document.getElementById("city-name").innerHTML = response.data.name;
    }
    document.getElementById("celcius").innerHTML = `${Math.round(
      response.data.main.temp
    )}&#176 C`;
    document.getElementById(
      "humidity-percent"
    ).innerHTML = `${response.data.main.humidity} %`;
    document.getElementById("wind-speed").innerHTML = `${Math.round(
      response.data.wind.speed
    )} KM/ H`;

    let weatherCondition = response.data.weather[0].main;

    if (weatherCondition === "clear") {
      document.getElementById("weather-img").src = "/Images/clear.png";
    } else if (weatherCondition === "Rain") {
      document.getElementById("weather-img").src = "/Images/rain.png";
    } else if (weatherCondition === "Clouds") {
      document.getElementById("weather-img").src = "/Images/clouds.png";
    } else if (weatherCondition === "drizzle") {
      document.getElementById("weather-img").src = "/Images/drizzle.png";
    } else if (weatherCondition === "mist") {
      document.getElementById("weather-img").src = "/Images/mist.png";
    }
  } catch (e) {
    console.log(e);
  }
}

let searchBtn = document.querySelector(".search-icon");
let inpBox = document.getElementById("city");

inpBox.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    getWeatherData(inpBox.value);
    inpBox.value = "";
  }
});
searchBtn.addEventListener("click", () => {
  getWeatherData(inpBox.value);
  inpBox.value = "";
});

async function InvalidCityFn() {
  inpBox.value;
}
