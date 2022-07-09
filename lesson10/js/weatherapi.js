//  function to pull in weather from openweathermap free API 
const requestURL = "https://api.openweathermap.org/data/2.5/weather?q=Fairbanks,Alaska&units=imperial&appid=efe08699ddd1c3e69ab9fb7992f15d2a";
// const cards = document.querySelector('.cards');
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        // temporary checking for valid response and data parsing
        console.log(jsonObject);
        document.querySelector('#current-temp').textContent = jsonObject.main.temp;
        const openweather = jsonObject['main'];
        const iconsrc = `https://openweathermap.org/img/w/${jsonObject.weather[0].icon}.png`;
        const desc0 = jsonObject.weather[0].description;
        // split the desc0 string into an array of strings 
        // whenever a blank space is encountered
        const words = desc0.split(" ");

        // loop through each element of the array and capitalize the first letter.
        for (var i = 0; i < words.length; i++) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        };
        // Join all the elements of the weather description array back into a string 
        // using a blankspace as a separator 
        const desc = words.join(" ");

        // Dom placement
        document.querySelector('#icon-src').textContent = iconsrc;
        document.querySelector('#weathericon').setAttribute('src', iconsrc);
        document.querySelector('#weathericon').setAttribute('alt', desc);
        document.querySelector('figcaption').textContent = desc;
        // prophets.forEach(displayProphets);
    });