function showWeather(temp, windspeed){
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

    // update placeholder
    temperatureobj.textContent = temp;
    windspeedobj.textContent = windspeed;
    windchillobj.textContent = chillmsg;
}

// TEST APPROPRIATE VALUES
showWeather(5,5);