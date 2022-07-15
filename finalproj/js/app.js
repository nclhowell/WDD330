// Declare and initialize a new variable to hold the current date
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


// OUTPUT 

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
  lat.textContent = "Your lattitude is " + GeoArray.latitude;
  prevlat.textContent = "Your previous lattitude was " + localStorage.prevlat;
  // console.log(`Previous Latatude: ${localStorage.prevlat}`);

  let lon = document.createElement('h3');
  let prevlon = document.createElement('h3');
  lon.textContent = "Your longitude is " + GeoArray.longitude;
  prevlon.textContent = "Your previous longitude was " + localStorage.prevlon;

  let city = document.createElement('h3');
  city.textContent = "Your city is " + GeoArray.city;

  let region_iso_code = document.createElement('h3');
  region_iso_code.textContent = "Your State Code is: " + GeoArray.region_iso_code;

  let region = document.createElement('h3');
  region.textContent = "Your full state name is : " + GeoArray.region;

  let isp = document.createElement('h3');
  isp.textContent = "Your Internet Provider is: " + GeoArray.connection.isp_name;

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
  localStorage.setItem("prevlat", GeoArray.latitude);
  localStorage.setItem("prevlon", GeoArray.longitude);
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
  // article.appendChild(img);

  document.querySelector('#geoinfo').appendChild(article);
  document.querySelector('#prevgeoinfo').appendChild(prevarticle);

}

let url = "https://ipgeolocation.abstractapi.com/v1/?api_key=c3b5f6ec9f4e4920a988180cede6238c";

fetch(url)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      console.log("error:", response);
    }
  })
  .then((data) => {
    // pass JSON data to GeoArray array 
    GeoArray = data;
    // console log for debug
    console.log(GeoArray);
    // here is the funky callback where the output function walks through each line of GeoArray
    // which holds the geolocation JSON data pulled in from fetch
    output(GeoArray);
  })

function myMap() {
  const mapProp = {
    center: new google.maps.LatLng(42.7046, -121.9959),
    zoom: 14
  };
  const map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}


let lat1 = 42.235636783840995
let lon1 = -121.82698455870376

document.getElementById("latlondist").innerText = `Placeholder for distance between points ${lat1}`;
//document.getElementById("latlondist").innerText = `${GeoArray.latitude}`; 

//let lat1 = parseFloat(GeoArray.latitude)
//let lon1 = parseFloat(GeoArray.longitude)

//let lat1 = GeoArray.latitude;
//let lon1 = GeoArray.longitude;


let lat2 = 42.70476653714137;
let lon2 = -121.99581142189531;


function distance(lat1, lon1, lat2, lon2) {
  var p = 0.017453292519943295; // Math.PI / 180
  var c = Math.cos;
  var a = 0.5 - c((lat2 - lat1) * p) / 2 +
    c(lat1 * p) * c(lat2 * p) *
    (1 - c((lon2 - lon1) * p)) / 2;

  return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
}

let distkm = distance(lat1, lon1, lat2, lon2)

function kmtoMiles(distkm) {
  distmiles = distkm * .62137;
  let distmilesString = distmiles.toFixed(1).toString();
  console.log(distmiles);
  return distmilesString;
}
// console.log(toString(dist.toFixed(1)));
// document.getElementById("latlondist").innerText = `${distmilesString}`; 