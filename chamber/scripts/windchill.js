function showWeather(temp, windspeed, weatherData){
    // get references to placeholders in the page
    temperatureobj = document.querySelector("#temperature");
    windspeedobj = document.querySelector("#windspeed")
    windchillobj = document.querySelector("#windchill")
    // calculate windchill or N/A
    chillmsg = "N/A"
    if (temp <= 50 && windspeed > 3) {
        let chill = Math.round((35.74 + (0.6215 * temp)) - (35.75 * Math.pow(windspeed,0.16)) + (0.4275 * temp * Math.pow(windspeed, 0.16)));
        chillmsg = `${chill}`;
    }

    const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`
    const desc = weatherData.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;  

    // update placeholder
    temperatureobj.textContent = temp;
    windspeedobj.textContent = windspeed.toFixed();
    windchillobj.textContent = chillmsg;
}

// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const lat = '40.3520';
const lon = '-88.7642';
const apikey = '7c769c7df2eb7fc6070718ff416f4bfd';

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=imperial`;

function displayResults(weatherData) {
  // toFixed(0) rounds the temperature to the nearest whole number
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
  // You can use @2x or @4x to make the icon bigger, or omit it for the standard size
  const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`
  const desc = weatherData.weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc;  
}

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        //console.log(data); // this is for testing the call
        showWeather(data.main.temp.toFixed(0), data.wind.speed, data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
        console.log(response);
    }
  }
  
  apiFetch();