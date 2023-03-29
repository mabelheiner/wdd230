// This sets the year for the footer
const today = new Date();
document.querySelector("#currentyear").textContent = today.getFullYear();

// This sets last modified date on the home page
document.querySelector('#lastmodified').textContent = document.lastModified;

const cityName = "San Diego";
const cnt = 3;
const apiKey = "505d1b4b75e2a9baa4c84e665e9e8f61";

const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}%appid=${apiKey}&units=imperial`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    // Extract the temperature for each day
    const temperatures = data.list.map(day => day.temp.day);

    // Log the temperatures
    temperatures.forEach((temp, index) => {
      console.log(`Temperature for day ${index + 1}: ${temp}°F`);
    });
  })
  .catch(error => {
    console.error("Error fetching forecast data:", error);
  });


