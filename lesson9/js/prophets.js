//  function to pull in prophets jscon file 
const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');
let x = 0;
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        // temporary checking for valid response and data parsing
        console.log(jsonObject);
        const prophets = jsonObject['prophets'];
        prophets.forEach(displayProphets);
    });
const prophets = jsonObject['prophets'];

function displayProphets(prophet) {
    x++;
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let p = document.createElement('p');
    let porder = thrd(x);
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    p.textContent = `${prophet.name} ${prophet.lastname} was borne on ${prophet.birthdate} in the state of ${prophet.birthplace}`;

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname} - ${porder} Latter-day President`);
    portrait.setAttribute('loading', 'lazy');

    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(portrait);
    card.appendChild(p);

    // Add/append the existing HTML div with the cards class with the section(card)
    cards.appendChild(card);
}

function thrd(num) {
    let order = "";
    let snum = "";
    snum = num.toString();
    switch (num) {
        case 1:
            order = `${snum}st`;
            break;
        case 2:
            order = `${snum}nd`;
            break;
        case 3:
            order = `${snum}rd`;
            break;
        default:
            order = `${snum}th`;

    }
    return order;
}