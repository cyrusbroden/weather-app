
async function getWeather() {
  const city = document.getElementById('cityInput').value.trim();
  const apiKey = '35b5be8eeb0b02ffc2e70ce7591823ac'; // Replace with your actual key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  console.log("User entered city:", city);
  console.log("Fetching URL:", url);

  try {
    const response = await fetch(url);
    console.log("Response status:", response.status);

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();
    console.log("API Data:", data);

    const result = `Weather in ${data.name}: ${data.main.temp}°C, ${data.weather[0].description}`;
    document.getElementById('weatherResult').innerText = result;
  } catch (error) {
    console.error("Error:", error);
    document.getElementById('weatherResult').innerText = error.message;
  }
}
