// async function getWeather() {
//   const city = document.getElementById("cityInput").value;
//   const apiKey = "YOUR_API_KEY"; // Replace with your actual OpenWeatherMap API key
//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

//   const response = await fetch(url);
//   const data = await response.json();

//   if (data.cod === 200) {
//     const resultDiv = document.getElementById("weatherResult");
//     resultDiv.innerHTML = `
//       <h3>${data.name}, ${data.sys.country}</h3>
//       <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
//       <p><strong>Weather:</strong> ${data.weather[0].main}</p>
//       <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
//     `;
//   } else {
//     document.getElementById("weatherResult").innerHTML = "City not found!";
//   }
// }