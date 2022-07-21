// call date function and store output in current_date variable 
let current_date = new Date();

// initalize and populate variable to hold the current month
let month_today = current_date.getMonth() + 1

// initalize and populate variable to hold the current day
let current_day = current_date.getDay()

// initialize and populate variable to hold the current year

let year_today = current_date.getFullYear()

// initialize and populate variable to hold the current time 
let hour = current_date.getHours()
let minutes = current_date.getMinutes()
let seconds = current_date.getSeconds()

// Dom update footer with today's date
// lastupdate =  `Last Updated ${month_today}/${current_day}/${year_today} ${hour}:${minutes}:${seconds}`;
document.getElementById("todaydate").innerHTML = `Last Updated ${month_today}/${current_day}/${year_today} ${hour}:${minutes}:${seconds}`;
// document.getElementById("todaydate").innerHTML = `What is going on?`;