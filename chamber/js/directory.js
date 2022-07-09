// Display the Grid by default, then wait for user to choose Grid or List
gridfunction();

// List Button
const listbutton = document.getElementById("listbutton");
listbutton.addEventListener("click", listfunction);

// Grid Button
const gridbutton = document.getElementById("gridbutton");
gridbutton.addEventListener("click", gridfunction);

// Display the Grid
function gridfunction() {
    document.getElementById("viewtag").innerHTML = "";
    const requestURL = "https://nclhowell.github.io/wdd230/chamber/data/biz.json";
    const cards = document.querySelector('.cards');
    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonObject) {
            // temporary checking for valid response and data parsing
            console.log(jsonObject);
            const biz = jsonObject['biz'];
            biz.forEach(displayCards);
        });

    function displayCards(biz) {
        // Create elements to add to the document
        let card = document.createElement('section');
        // section.setAttribute('class', "dir");
        let h1 = document.createElement('h1');
        let h2 = document.createElement('h2');
        let portrait = document.createElement('img');
        let p = document.createElement('p');
        // Change the textContent property of the h2 element to contain the prophet's full name
        h1.innerHTML = `${biz.name}`;
        h2.innerHTML = `${biz.address}<br>${biz.phone}`;
        p.textContent = `${biz.pitch}`;

        // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
        portrait.setAttribute('src', biz.logo);
        portrait.setAttribute('alt', `Business Logo`);
        portrait.setAttribute('loading', 'lazy');

        // Add/append the section(card) with the h2 element
        card.appendChild(portrait);
        card.appendChild(h1);
        card.appendChild(h2);
        card.appendChild(p);

        // Add/append the existing HTML div with the cards class with the section(card)
        cards.appendChild(card);
    }

    return null;
}

// Display the List
function listfunction() {
    document.getElementById("viewtag").innerHTML = "";
    const requestURL = "https://nclhowell.github.io/wdd230/chamber/data/biz.json";
    const cards = document.querySelector('.cards');
    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonObject) {
            // temporary checking for valid response and data parsing
            console.log(jsonObject);
            const biz = jsonObject['biz'];
            biz.forEach(displayCards);
        });

    function displayCards(biz) {
        // Create elements to add to the document
        let list1 = document.createElement('ul');
        let li1 = document.createElement('li');
        let li2 = document.createElement('li');
        let li3 = document.createElement('li');
        let li4 = document.createElement('li');

        li1.setAttribute("class", "bizname");
        
        // att.value = "square";
        /*const bizbullet = document.createAttribute("list-style-type");
        bizbullet.value = "none";
        const bizname = document.getElementByTagName("li")[0];
        bizname.setAttributeNode(biznamebullet);*/

        // Change the textContent property of the h2 element to contain the biz info 
        li1.innerHTML = `${biz.name}`;
        li2.innerHTML = `${biz.address}`;
        li3.textContent = `${biz.phone}`;
        li4.textContent = `${biz.pitch}`;

        // Add/append the section(card) with the h2 element
        // card.appendChild(portrait);
        list1.appendChild(li1);
        list1.appendChild(li2);
        list1.appendChild(li3);
        list1.appendChild(li4);

        // Add/append the existing HTML div with the cards class with the section(card)
        cards.appendChild(list1);
    }
    return null;
}