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
document.querySelector("#todaydate").innerHTML = `Current Date and Time is  ${month_today}/${day_today}/${year_today} ${hour}:${minutes}:${seconds}`;
document.getElementById("color3").value = "#000000";

const resetaction = document.getElementById("resetcolors");
resetaction.addEventListener('click', blacken);

function blacken() {
document.getElementById("color1").value = "#000000";
document.getElementById("color2").value = "#000000";
document.getElementById("color3").value = "#000000";
}
//colorPicker.addEventListener("input", updateFirst, false);

//function updateAll(event) {
//    document.querySelectorAll("p").forEach(function(p) {
//      p.style.color = "Black" 
//    });
//  }
  
