const weather = () => {
    const cityInput = document.getElementById("city-input")
    const cityValue = cityInput.value
    const apiKey = '9d873e004a20029c47d707094274e72c'
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}`
    cityInput.value = ""
    if (cityValue == "" || !isNaN(cityValue)) {
        alert("Please Give A City Name")
    } else {
        document.querySelector("#info").style.display = "block"
        fetch(api)
            .then(res => res.json())
            .then(data => showWeather(data))
    }
}
const showWeather = (data) => {
    // way 1

    const cityName = document.getElementById("city")
    const cityTemp = document.getElementById("temp")
    const citySky = document.getElementById("forecast")
    const weatherType = document.getElementById("weather-img")
    cityName.textContent = data.name
    cityTemp.textContent = `${parseFloat(data.main.temp - 273.15).toFixed(2)}°C`
    citySky.textContent = data.weather[0].main
    weatherType.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

    // way 2

    // const div = document.createElement("div")
    // const weatherImg = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    // const weatherInfo = `${parseFloat(data.main.temp - 273.15).toFixed(2)}°C`
    // div.innerHTML = `
    // <img src=${weatherImg}>
    // <h1>${data.name}</h1>
    // <h3>${weatherInfo}</h3>
    // <h5 class="fw-light">${data.weather[0].main}</h5>
    // `
    // document.getElementById("info").appendChild(div)
}