let images = document.querySelectorAll("[fat-data]");

// This is the section where intersection IntersectionObserver tracks the viewport and loads the big images only
// When the image becomes part of the browser view
// Someday I will fully learn what is going on here... 
function preloadImage(img) {
  let src = img.getAttribute("fat-data");
  if (!src) {
    return;
  }
  img.src = src;
}

let imgOptions = {
  threshold: 1,
  rootMargin: "0px 0px 300px 0px"
};

let imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      preloadImage(entry.target);
      imgObserver.unobserve(entry.target);
    }
  })
}, imgOptions);

images.forEach(image => {
  imgObserver.observe(image);
})

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
  motd = "Not the weekend yet hang in there";
} else {
  motd = "Woohoo....it's the weekend (but homework lurks)";
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

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1
document.querySelector("#message1").innerHTML = motd;

// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2

document.querySelector("#message2").innerHTML = dy;

//Fetch

// src geo info and shove it into the myArray 

let myArray = [];

function output(myArray) {
  // Create elements and add attributes to the img element
  let article = document.createElement('article');

  let city = document.createElement('h3');
  city.textContent = "Your city is " + myArray.city;

  let region_iso_code = document.createElement('h3');
  region_iso_code.textContent = "Your State Code is: " + myArray.region_iso_code;

  let region = document.createElement('h3');
  region.textContent = "Your full state name is : " + myArray.region;

  let isp = document.createElement('h3');
  isp.textContent = "Your Internet Provider is: " + myArray.connection.isp_name;

  let ip = document.createElement('h3');
  ip.textContent = "Your Internet Address is: " + myArray.ip_address;

  let con_type = document.createElement('h3');
  con_type.textContent = "Your Connection Type is: " + myArray.connection.connection_type;

  let country = document.createElement('h3');
  country.textContent = "Your Country is: " + myArray.country;

  let img = document.createElement('img');
  img.setAttribute('src', myArray.flag.png);
  img.setAttribute('alt', myArray.country);

  // grab JSON values then populate elements

  article.appendChild(city);
  article.appendChild(region_iso_code);
  article.appendChild(region);
  article.appendChild(isp);
  article.appendChild(ip);
  article.appendChild(con_type);
  article.appendChild(country);
  article.appendChild(img);

  document.querySelector('#geo_info').appendChild(article);
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
    // pass JSON data to myArray array 
    myArray = data;
    // console log for debug
    console.log(myArray);
    // here is the funky callback where the output function walks through each line of myArray
    // which holds the geolocation JSON data pulled in from fetch
    output(myArray);
  })

let heroArray = [];

  function herooutput(heroArray) {
    // Create elements and add attributes to the img element
    let article = document.createElement('article');
  
    // grab JSON values then populate elements
    let hname = document.createElement('h3');
    hname.textContent = "Your Hero Name is:" + heroArray.name;
  
    let hrname = document.createElement('h3');
    hrname.textContent = "Your Hero's Real Name is: " + heroArray.realName;
  
    // grab JSON values then populate elements
  
    article.appendChild(hname);
    article.appendChild(hrname);
  
    document.querySelector('#hero_info').appendChild(article);
  }
  

let herosurl = "https://spbooks.github.io/jsninja2/questions.json"

fetch(herosurl)
  .then((hresponse) => {
    if (hresponse.ok) {
      return hresponse.json();
    } else {
      console.log("error:", hresponse);
    }
  })
  .then((herodata) => {
    // pass JSON data to myArray array 
    heroArray = herodata;
    // console log for debug
    console.log(heroArray);
    // here is the funky callback where the output function walks through each line of myArray
    // which holds the geolocation JSON data pulled in from fetch
    herooutput(heroArray);
  }) 