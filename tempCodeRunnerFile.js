const apiKey = '731b8031ad62c58bf644e87b5390508a'; // Replace with your OpenWeatherMap API key

// Function to fetch and display weather
async function fetchWeather() {
  const city = document.getElementById('city-input').value.trim();
  if (!city) {
    document.getElementById('weather-info').innerHTML = <p>Please enter a city name.</p>;
    return;
  }

  try {
    // API URL
    const apiUrl ='https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric';

    // Fetch response from API
    const response = await fetch(apiUrl);

    // Check if the response is OK
    if (!response.ok) {
      throw new Error('City not found or API request failed');
    }

    // Parse JSON data
    const data = await response.json();

    // Display weather information
    const weatherInfo = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>Temperature: ${data.main.temp}°C</p>
      <p>Weather: ${data.weather[0].description}</p>
      <p>Humidity: ${data.main.humidity}%</p>
      <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
    document.getElementById('weather-info').innerHTML = weatherInfo;
  } catch (error) {
    // Handle errors
    console.error('Error:', error);
    document.getElementById('weather-info').innerHTML = <p>${error.message}</p>;c
  }
}

// Event listener for button click
document.getElementById('get-weather').addEventListener('click', fetchWeather);
