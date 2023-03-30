// This sets the year for the footer
const today = new Date();
document.querySelector("#currentyear").textContent = today.getFullYear();

// This sets last modified date on the home page
document.querySelector('#lastmodified').textContent = document.lastModified;

const lat = '32.7157';
const lon = '-117.1611';
const apikey = '7c769c7df2eb7fc6070718ff416f4bfd';

const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apikey}&units=imperial`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    // Extract the temperature for each day
    console.log(data);
    console.log("Temperature Day 1: ", data.list[0].main.temp)
  })
  .catch(error => {
    console.error("Error fetching forecast data:", error);
  });


