const apiKey = 'cf819c541636ea3313a7ff1fb88e1889'; // Ganti dengan kunci API cuaca Anda

async function searchWeather() {
    const city = document.getElementById('search').value;

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();

    displayWeather(data);
}

function displayWeather(data) {
    const weatherDiv = document.getElementById('weather');

    if (data.cod === '404') {
        weatherDiv.innerHTML = '<p>City not found</p>';
        return;
    }

    const cityName = data.name;
    const temperature = data.main.temp;
    const description = data.weather[0].description;

    weatherDiv.innerHTML = `
        <h3>${cityName}</h3>
        <p>Temperature: ${temperature}°C</p>
        <p>Description: ${description}</p>
    `;
}
