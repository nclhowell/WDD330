// call date function and store output in date_today variable 
let date_today = new Date();

// initalize and populate variable to hold the current month
let month_today = date_today.getMonth() + 1

// initalize and populate variable to hold the current day
let day_today = date_today.getDay()

// initialize and populate variable to hold the current year

let year_today = date_today.getFullYear()

// initialize and populate variable to hold the current time 
let hour = date_today.getHours()
let minutes = date_today.getMinutes()
let seconds = date_today.getSeconds()

// Dom update footer with today's date
document.querySelector("#todaydate").innerHTML = `Last Updated ${month_today}/${day_today}/${year_today} ${hour}:${minutes}:${seconds}`;

// Dom update header with today's date in full date format
let formatted_date_today = new Date();
const datefield = document.querySelector("headdate");
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(formatted_date_today);
datefield.className = "newdate";
datefield.innerHTML = `${fulldate}`
// datefield.setAttribute(background-color, transparent);

// Dom update footer with current copyright year
const yearfield = document.querySelector("#yeartoday");
yearfield.innerHTML = `Copyright ${year_today}`

// Check for element in Join form.. if element label "ftime" exists process the hidden field named "ftime" else do nothing

// Section for Dom update hidden form with current date  
var ftimeexists = document.getElementById("ftime");
if (ftimeexists) {
// element "ftime" DOES exist so let's place todays date and time into the hidden join.html form field "ftime"
const fulldatetime = `${month_today}/${day_today}/${year_today} ${hour}:${minutes}:${seconds}`;
document.getElementById("ftime").value = fulldatetime;
// Log to console to make sure we incorporated the form input time into the hidden DOM field labeled "ftime"
// console.log(document.getElementById("ftime").value)
}