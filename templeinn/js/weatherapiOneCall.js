//  function to pull in weather from openweathermap free API 
const requestURL = "https://api.openweathermap.org/data/2.5/weather?q=Bethesda,Maryland&units=imperial&appid=efe08699ddd1c3e69ab9fb7992f15d2a";
const requestURLoneCall = "https://api.openweathermap.org/data/2.5/onecall?lat=38.98&lon=-77.09&units=imperial&appid=efe08699ddd1c3e69ab9fb7992f15d2a";
// const cards = document.querySelector('.cards');
fetch(requestURLoneCall)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
            // temporary checking for valid response and data parsing
            console.log(jsonObject);
            // document.querySelector('#current-temp').textContent = jsonObject.main.temp;
            document.querySelector('#conditions').innerHTML = `Current Conditions: ${jsonObject.current.weather[0].description}`;
            document.querySelector('#current-temp').innerHTML = `Current Temperature:  ${jsonObject.current.temp}&deg; F`;
            document.querySelector('#windspeed').innerHTML = `Current Wind Speed:  ${jsonObject.current.wind_speed} MPH`;
            document.querySelector('#humidity').innerHTML = `Current Humidity: ${jsonObject.current.humidity}%`;

            let daytoday = jsonObject.daily[0].dt;
            let day1dt = jsonObject.daily[1].dt;
            let day2dt = jsonObject.daily[2].dt;
            let day3dt = jsonObject.daily[3].dt;

            // const day1dtms = day1dt * 1000;
            const daytodayobject = new Date();
            const d0 = daytodayobject.toLocaleString("en-US", {timezonename: "long"}); 
            const day1object = new Date(day1dt * 1000);
            const d1 = day1object.toLocaleString("en-US", {weekday: "long"}); 
            const day2object = new Date(day2dt * 1000);
            const d2 = day2object.toLocaleString("en-US", {weekday: "long"}); 
            const day3object = new Date(day3dt*1000);
            const d3 = day3object.toLocaleString("en-US", {weekday: "long"}); 

            // let forecastday1 = day1dt.getUTCDay(); 
            // document.querySelector('#dtday').innerHTML = `dtday  ${forecastday0}`;
            document.querySelector('#forecastdayone').innerHTML = `${d1}:  ${jsonObject.daily[1].weather[0].description}`;
            document.querySelector('#forecastdaytwo').innerHTML = `${d2}:   ${jsonObject.daily[2].weather[0].description}`;
            document.querySelector('#forecastdaythree').innerHTML = `${d3}:   ${jsonObject.daily[3].weather[0].description}`;

            // Not sure what is going on with this assignment but there is NO alert data in the API.. Using current weather description
            document.querySelector('#weatheralert').innerHTML = `<button id="mybtn">Clear Alert</button> ${d0} 
            ${jsonObject.daily[1].weather[0].description}`; 

            document.getElementById("mybtn").addEventListener("click", clearalert);

            function clearalert() {
            document.querySelector('#weatheralert').innerHTML = "";
            };


                });