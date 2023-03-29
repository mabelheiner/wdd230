// This sets the year for the footer
const today = new Date();
document.querySelector("#currentyear").textContent = today.getFullYear();

// This sets last modified date on the home page
document.querySelector('#lastmodified').textContent = document.lastModified;

const lat = '32.715736';
const lon = '-117.161087';
const apikey = '7c769c7df2eb7fc6070718ff416f4bfd';

const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apikey}&units=imperial`;

function displayDaily(data) {
    var forecastEl = document.querySelector("forecast");
    var fday = "";
    console.log("Data,", data.list)
    data.list.forEach((value, index) => {
        if (index > 0) {
            var dayname = new Date(value.dt * 1000).toLocaleDateString("en", {
                weekday: "long",
            });
            var icon = value.weather[0].icon;
            var temp = value.temp.day.toFixed(0);
            fday = `<div class="forecast-day">
                <p>${dayname}</p>
                <p><span class="ico-${icon}" title="${icon}"></span></p>
                <div class="forecast-day--temp">${temp}<sup>°C</sup></div>
            </div>`;
            forecastEl[0].insertAdjacentHTML('beforeend', fday);
        }
    });
}

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        //console.log(data); // this is for testing the call
        console.log(data);
        displayDaily(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

