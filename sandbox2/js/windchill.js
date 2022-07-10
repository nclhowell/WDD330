//  function to pull in Wind Speed and Temp 

//  Pull windspeed and temp from DOM 
let windspeed = parseFloat(document.querySelector("#windspeed").textContent);
let temp = parseFloat(document.querySelector("#temp").textContent);

//  Calc wind chill if relevant which means the temp must be less than 50 and wind speed must be greater than 3 
if (windspeed > 3 && temp < 50) {
    let windchill = 35.74 + 0.6215 * temp - 35.75 * (Math.pow(windspeed, 0.16)) + .4275 * temp * (Math.pow(windspeed, 0.16))
    let formattedwindchill = windchill.toFixed(2);
    //  Insert results into DOM 
    document.querySelector("#windchill").textContent = `${formattedwindchill}`;
}