// initialize display elements
const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `Welcome...This is your first visit!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits
window.localStorage.setItem("visits-ls", numVisits);

// get previous timestamp
prevMilliseconds = localStorage.getItem("prevMilliseconds");
// set new timestamp
todayMilliseconds = Date.now();
// calculate difference between previous and current timestamp 
diffMilliseconds = todayMilliseconds - prevMilliseconds;
// convert to number of days by dividing by number of milliseconds in a day 8.64 E6 
daysNum = Math.round((diffMilliseconds / 86400000), 0);
// store today's timestamp which becomes previous timestamp for next visits calculation 
window.localStorage.setItem("prevMilliseconds", todayMilliseconds);
// display number of days since last visit
todayDisplay.textContent = daysNum;