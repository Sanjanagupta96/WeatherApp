const apiKey = '731b8031ad62c58bf644e87b5390508a'; // Replace with your OpenWeatherMap API key

document.getElementById('get-weather').addEventListener('click', async () => {
  const city = document.getElementById('city-input').value.trim();
  if (!city) {
    document.getElementById('weather-info').innerHTML = '<p>Please enter a city name.</p>';
    return;
  }

  try {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error('City not found or API request failed');
    }

    const data = await response.json();
    document.getElementById('weather-info').innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>Temperature: ${data.main.temp}°C</p>
      <p>Weather: ${data.weather[0].description}</p>
      <p>Humidity: ${data.main.humidity}%</p>
      <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
  } catch (error) {
    console.error('Error:', error.message);
    document.getElementById('weather-info').innerHTML = `<p>${error.message}</p>`;
  }
});
