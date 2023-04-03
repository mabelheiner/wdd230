const lat = '32.7157';
const lon = '-117.1611';
const apikey = '7c769c7df2eb7fc6070718ff416f4bfd';

const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apikey}&units=imperial`;

function displayWeather(weather_list){
  forecast = document.querySelector(".weather");

  let daily = [];
  let icons = [];

  let max = [];
  let min = [];
  let feels_like = [];
  for (let i=0; daily.length < 3; i += 8){
    daily.push(weather_list.list[i].main.temp.toFixed(0));
    max.push(weather_list.list[i].main.temp_max.toFixed(0));
    min.push(weather_list.list[i].main.temp_min.toFixed(0));
    icons.push(weather_list.list[i].weather[0].icon);
    feels_like.push(weather_list.list[i].main.feels_like.toFixed(0));
  };

  let day_names = [];
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  for(let d=0;day_names.length < 3;d += 8){
    var date = new Date(weather_list.list[d].dt * 1000);
    var dayName = days[date.getDay()];
    day_names.push(dayName);    
  }

  let dayz = 0;
  let w = 0;
  daily.forEach((day_temp) => {
    
    let day = document.createElement("div");
    day.innerHTML += `<h3> ${day_names[dayz]} </h3>
    <p>Temperature: ${day_temp}</p> <br> 
    <p> High: ${max[dayz]} </p> <br>
    <p> Low: ${min[dayz]} </p> <br>
    <p> Feels like: ${feels_like[dayz]} <p> 
    <img src="https://openweathermap.org/img/wn/${icons[dayz]}@4x.png" alt="${weather_list.list[dayz].weather[0].description}">
    <p>${weather_list.list[w].weather[0].description}</p`;
    dayz += 1
    w += 8
    day.classList.add("day-forecast");
    forecast.appendChild(day);
  });
}

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    displayWeather(data);
  })
  .catch(error => {
    console.error("Error fetching forecast data:", error);
  });


