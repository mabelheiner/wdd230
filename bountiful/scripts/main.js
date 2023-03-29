// This sets the year for the footer
const today = new Date();
document.querySelector("#currentyear").textContent = today.getFullYear();

// This sets last modified date on the home page
document.querySelector('#lastmodified').textContent = document.lastModified;

const lat = '32.715736';
const lon = '-117.161087';
const apikey = '7c769c7df2eb7fc6070718ff416f4bfd';

const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apikey}&units=imperial`;

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        //console.log(data); // this is for testing the call
        console.log(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
        console.log(response);
    }
  }
  
  apiFetch();

