async function getWeather() {

    const city = document.getElementById("city").value;
    const weatherResult = document.getElementById("weatherResult");

    if(city === ""){
        weatherResult.innerHTML = "<p>Please enter a city name.</p>";
        return;
    }

    const apiKey = "82edfbafd11d468e33fc43cc7a551f63";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try{

        const response = await fetch(url);
        const data = await response.json();

        if(data.cod != 200){
            weatherResult.innerHTML = "<p>❌ City not found!</p>";
            return;
        }

        weatherResult.innerHTML = `
            <div class="weather-card">
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>🌡 Temperature: ${data.main.temp}°C</p>
                <p>🤒 Feels Like: ${data.main.feels_like}°C</p>
                <p>☁ Weather: ${data.weather[0].description}</p>
                <p>💧 Humidity: ${data.main.humidity}%</p>
                <p>🌬 Wind Speed: ${data.wind.speed} m/s</p>
                <p>📊 Pressure: ${data.main.pressure} hPa</p>
            </div>
        `;

    }catch(error){
        weatherResult.innerHTML = "<p>⚠ Error fetching weather data.</p>";
    }
}