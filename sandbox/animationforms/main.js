// const input = form.elements.searchInput;
const form = document.forms['search'];
const input = form.searchInput;
input.value = 'Search Here';


form.addEventListener('submit', search, false);

function search(event) {
  alert(`You Searched for: ${input.value}`);
  event.preventDefault();
}

input.addEventListener('focus', function () {
  if (input.value === 'Search Here') {
    input.value = ''
  }
}, false);

input.addEventListener('blur', function () {
  if (input.value === '') {
    input.value = 'Search Here';
  }
}, false);

hero.powers = [];
for (let i = 0; i < form.powers.length; i++) {
  if (form.powers[i].checked) {
    hero.powers.push(form.powers[i].value);
  }
}

hero.powers = [...form.powers].filter(box => box.checked).map(box => box.value);


//input.addEventListener('focus', () => alert('focused'), false);
//input.addEventListener('blur', () => alert('blurred'), false);
//input.addEventListener('change', () => alert('changed'), false);

// input.addEventListener('focus', () => alert('focused'), false);
/* const squareElement = document.getElementById('square');
let angle = 0;
setInterval( () => {
angle = (angle + 2) % 360;
squareElement.style.transform = `rotate(${angle}deg)`
}, 1000/60);

const squareElement = document.getElementById('square');
let angle = 0;
function rotate() {
angle = (angle + 2)%360;
squareElement.style.transform = `rotate(${angle}deg)`
window.requestAnimationFrame(rotate);
}
const id = requestAnimationFrame(rotate);
*/

navigator.geolocation.getCurrentPosition(youAreHere);

function youAreHere(position) {
  console.log(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`)
  document.getElementById("latlong").innerHTML = `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`;
}