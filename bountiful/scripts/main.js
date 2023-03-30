// This sets the year for the footer
const today = new Date();
document.querySelector("#currentyear").textContent = today.getFullYear();

// This sets last modified date on the home page
document.querySelector('#lastmodified').textContent = document.lastModified;

const lat = '32.7157';
const lon = '-117.1611';
const apikey = '7c769c7df2eb7fc6070718ff416f4bfd';

const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apikey}&units=imperial`;

function displayWeather(fruit_list){
  forecast = document.querySelector(".weather");
  let daily = [];
  for (let i=0; i<3; i++){
    daily.push(fruit_list.list[i].main.temp);
  };

  let day_names = [];
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  for(let d=0;day_names.length < 3;d += 8){
    var date = new Date(fruit_list.list[d].dt * 1000);
    var dayName = days[date.getDay()];
    day_names.push(dayName);    
  }

  let dayz = 0;
  daily.forEach((day_temp) => {
    
    let day = document.createElement("div");
    day.innerHTML += `<p>The ${day_names[dayz]}'s temperature is ${day_temp}</p>`;
    console.log(day_temp);
    console.log(day_names[dayz]);
    dayz += 1
    day.classList.add("day-forecast");
    forecast.appendChild(day);
  });
}

/*
function displayFruits(fruit_list){
  forecast = document.querySelector(".weather");
  const weatherIcon = document.querySelector('#weather-icon');
  const captionDesc = document.querySelector('figcaption');
  let daily = [];
  let icons = [];
  for (let i=0; i<3; i++){
    daily.push(fruit_list.list[i].main.temp);
    icons.push(fruit_list.list[i].weather[0].icon);
  };

  console.log(icons);

  let day_names = [];
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  let ic = 0;
  for(let d=0;day_names.length < 3;d += 8){
    var date = new Date(fruit_list.list[d].dt * 1000);
    var dayName = days[date.getDay()];
    day_names.push(dayName);    

    console.log(icons[ic]);
    console.log("Fruit icon: ", fruit_list.list[ic].weather[ic].icon);
    const iconsrc = `https://openweathermap.org/img/wn/${fruit_list.list[ic].weather[ic].icon}@4x.png`;
    const desc = fruit_list.weather[ic].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc; 
    ic += 1;
  }

  let dayz = 0;
  daily.forEach((day_temp) => {
    
    let day = document.createElement("div");
    day.innerHTML += `<p>The ${day_names[dayz]}'s temperature is ${day_temp}</p>`;
    console.log(day_temp);
    console.log(day_names[dayz]);
    dayz += 1
    day.classList.add("day-forecast");
    forecast.appendChild(day);
  });
}
*/

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    //displayFruits(data);
    displayWeather(data);
  })
  .catch(error => {
    console.error("Error fetching forecast data:", error);
  });


