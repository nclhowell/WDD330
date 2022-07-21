//  This program pulls your ISP data and sends it to Google Maps to render a map centered on your ISP's Lat/Long
//  We also have demo of advanced CSS transition effects and simple Form Validation 
// document.getElementById("todaydate").innerHTML = lastupdate

let date_today = new Date();

// Declare another variable to hold the day of the week
let day_today = "";

// Assign variable declared to day of the week
day_today = date_today.getDay();

// Declare a variable to hold a message that will be displayed
let motd = "";

//  if the day of the week is a weekday set the message variable to the string 'Hang in there!'
//  if weekend day, set the message variable to Woohoo.. its the weekend and I still have homework to do! 

if (day_today < 6 && day_today > 0) {
  motd = "Not the weekend yet... hang in there";
} else {
  motd = "Woohoo....it's the weekend.. let's do something fun with the fam! ";
}

let dy = "";

// use the day of week variable to translate day of week to text version

switch (day_today) {
  case 0:
    dy = "Sunday";
    break;
  case 1:
    dy = "Monday";
    break;
  case 2:
    dy = "Tuesday";
    break;
  case 3:
    dy = "Wednesday";
    break;
  case 4:
    dy = "Thursday";
    break;
  case 5:
    dy = "Friday";
    break;
  case 6:
    dy = "Saturday";
}



// first message variable assigned to the HTML element with an ID of message1
document.querySelector("#message1").innerHTML = motd;

// second message variable to the HTML element with an ID of message2

document.querySelector("#message2").innerHTML = dy;

//Fetch src geo info and populate GeoArray 

let GeoArray = [];

function output(GeoArray) {
  // Create elements and add attributes to the img element
  let article = document.createElement('article');
  let prevarticle = document.createElement('article');

  let lat = document.createElement('h3');
  let prevlat = document.createElement('h3');
  lat.textContent = "Your ISP lattitude is " + GeoArray.latitude;
  prevlat.textContent = "Your previous ISP lattitude was " + localStorage.prevlat;

  let lon = document.createElement('h3');
  let prevlon = document.createElement('h3');
  lon.textContent = "Your ISP longitude is " + GeoArray.longitude;
  prevlon.textContent = "Your previous ISP longitude was " + localStorage.prevlon;

  let city = document.createElement('h3');
  city.textContent = "Your city is " + GeoArray.city;

  let region_iso_code = document.createElement('h3');
  region_iso_code.textContent = "Your State Code is: " + GeoArray.region_iso_code;

  let region = document.createElement('h3');
  region.textContent = "Your full state name is : " + GeoArray.region;

  let isp = document.createElement('h3');
  isp.textContent = "Your Internet Provider (ISP) is: " + GeoArray.connection.isp_name;

  let ip = document.createElement('h3');
  ip.textContent = "Your Internet Address is: " + GeoArray.ip_address;

  let con_type = document.createElement('h3');
  con_type.textContent = "Your Connection Type is: " + GeoArray.connection.connection_type;

  let country = document.createElement('h3');
  country.textContent = "Your Country is: " + GeoArray.country;

  let img = document.createElement('img');
  img.setAttribute('src', GeoArray.flag.png);
  img.setAttribute('alt', GeoArray.country);

  // grab JSON values then populate elements

  article.appendChild(lat);
  localStorage.setItem("currentlat", GeoArray.latitude);
  localStorage.setItem("currentlon", GeoArray.longitude);
  prevarticle.appendChild(prevlat);
  prevarticle.appendChild(prevlon);
  article.appendChild(lon);
  article.appendChild(city);
  article.appendChild(region_iso_code);
  article.appendChild(region);
  article.appendChild(isp);
  article.appendChild(ip);
  article.appendChild(con_type);
  article.appendChild(country);
  article.appendChild(img);

  article.setAttribute("color", "green");
  document.querySelector('#geoinfo').appendChild(article);
  document.querySelector('#prevgeoinfo').appendChild(prevarticle);


}

// abstractapi.. low priced subscription api which pulls your isp info and provides it in JSON format

let url = "https://ipgeolocation.abstractapi.com/v1/?api_key=c3b5f6ec9f4e4920a988180cede6238c";

fetch(url)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      // console.log("error:", response);
    }
  })
  .then((data) => {
    // pass JSON data to GeoArray array 
    GeoArray = data;
    // console log for debug
    console.log(GeoArray);

    // here is the callback where the output function walks through each line of GeoArray
    // which holds the geolocation JSON data pulled in from fetch
    output(GeoArray);
  })

// pull current isp lat/long which was pushed to local storage when isp info was loaded 

isplat = parseFloat(localStorage.currentlat);
isplon = parseFloat(localStorage.currentlon);

// let maplat = 43.9285
// let maplon = -116.1839 

localStorage.setItem("prevlat", localStorage.currentlat);
localStorage.setItem("prevlon", localStorage.currentlon);


function myMap() {
  const mapProp = {
    center: {
      lat: isplat,
      lng: isplon
    },
    zoom: 14
  };
  const map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}