document.addEventListener("DOMContentLoaded", () => {
  const forecastData = [
    {
      day: "Saturday",
      date: "10/05/2025",
      type: "Isolated Thunderstorms",
      backgroundGif: "./images/cloud.gif",
      forecast: {
        morning: "No rain",
        afternoon: "Isolated thunderstorms",
        night: "Isolated thunderstorms",
        min: "23°C",
        max: "33°C"
      }
    },
    {
      day: "Sunday",
      date: "11/05/2025",
      icon: "./images/storm.png",
      type: "Stormy Weather",
      backgroundGif: "./images/cloud.gif",
      forecast: {
        morning: "Heavy rain",
        afternoon: "Strong winds and thunder",
        night: "Continued storm with rain",
        min: "22°C",
        max: "31°C"
      }
    },
    {
      day: "Monday",
      date: "12/05/2025",
      icon: "./images/rain.png",
      type: "Rainy Day",
      backgroundGif: "./images/drizzle.gif",
      forecast: {
        morning: "Light rain",
        afternoon: "Moderate rain",
        night: "Heavy showers",
        min: "21°C",
        max: "29°C"
      }
    },
    {
      day: "Tuesday",
      date: "13/05/2025",
      icon: "./images/sunny.png",
      type: "Sunny & Clear",
      backgroundGif: "./images/sunny.gif",
      forecast: {
        morning: "Sunny",
        afternoon: "Sunny",
        night: "Clear skies",
        min: "24°C",
        max: "34°C"
      }
    },
    {
      day: "Wednesday",
      date: "14/05/2025",
      icon: "./images/cloudy.png",
      type: "Cloudy",
      backgroundGif: "./images/mildcloudy.gif",
      forecast: {
        morning: "Overcast",
        afternoon: "Cloudy",
        night: "Cloudy",
        min: "22°C",
        max: "30°C"
      }
    },
    {
      day: "Thursday",
      date: "15/05/2025",
      icon: "./images/wind.png",
      type: "Windy",
      backgroundGif: "./images/wind.gif",
      forecast: {
        morning: "Gusty winds",
        afternoon: "Windy",
        night: "Light breeze",
        min: "23°C",
        max: "32°C"
      }
    },
    {
      day: "Friday",
      date: "16/05/2025",
      icon: "./images/partlycloudy.png",
      type: "Partly Cloudy",
      backgroundGif: "./images/wind.gif",
      forecast: {
        morning: "Partly cloudy",
        afternoon: "Sunny intervals",
        night: "Few clouds",
        min: "24°C",
        max: "33°C"
      }
    }
  ];

  const container = document.getElementById("weather-cards");

  forecastData.forEach(item => {
    const card = document.createElement("div");
    card.className = "weather-card";
    card.style.backgroundImage = `url('${item.backgroundGif}')`;

    card.innerHTML = `
      <div class="weather-date">
        <span class="day">${item.day}</span>
        <span class="date">${item.date}</span>
      </div>
      <div class="weather-icon">
       
      </div>
      <div class="weather-type">${item.type}</div>
      <div class="weather-forecast">
        <p><strong>Morning:</strong> ${item.forecast.morning}</p>
        <p><strong>Afternoon:</strong> ${item.forecast.afternoon}</p>
        <p><strong>Night:</strong> ${item.forecast.night}</p>
        <p><strong>Min:</strong> ${item.forecast.min} &nbsp;&nbsp; <strong>Max:</strong> ${item.forecast.max}</p>
      </div>
    `;

    container.appendChild(card);
  });
});
