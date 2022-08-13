const searchText = () => {
  const searchInput = document.getElementById("city_name");
  const searchCity = searchInput.value;
  if (searchCity == "") {
    const error = document.getElementById("error-message");
    error.innerText = "You have entire empty search";
    error.style.textTransform = "Capitalize";
    document.getElementById("weather-wrapper").textContent = "";
  } else {
    loadData(searchCity);
    searchInput.value = "";
    document.getElementById("weather-wrapper").textContent = "";
  }
};

const loadData = (searchCity) => {
  console.log("clicked");
  const key = `8e9b2f45032975fb6b7ceee4d90c36ef`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${key}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayResult(data));
};

const displayResult = (weather) => {
  if (weather.cod == 404) {
    const error = document.getElementById("error-message");
    error.innerText = weather.message;
    error.style.textTransform = "Capitalize";
  } else {
    console.log(weather);
    console.log("weather", weather.weather[0].icon);
    document.getElementById("error-message").textContent = "";
    const weatherWrapper = document.getElementById("weather-wrapper");
    const weatherInfo = document.createElement("div");
    weatherInfo.innerHTML = `
    <img src="https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png" alt="">
    <h1>${weather.name}</h1>
    <h3><span>${weather.main.temp}</span>&deg;C</h3>
    <h1 class="lead">${weather.weather[0].main}</h1>
    `;
    weatherWrapper.appendChild(weatherInfo);
  }
};
