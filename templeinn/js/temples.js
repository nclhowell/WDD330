let templeArray = []; 
let templeArrayOnetemple = []; 
const templegroup = document.querySelector("#alltemples");
const featuredtemple = document.querySelector("#featuredtemple");
function output(temples)
        {
            let article = document.createElement('section');

            let likebutton = document.createElement('button');
            likebutton.textContent = `Click if you Like the ${temples.likebutton} temple` ;
            likebutton.style.color = "orange";
            likebutton.name = `${temples.likebutton}`;


            let templeName = document.createElement('h3');
            templeName.textContent = temples.templeName;

            let location = document.createElement('h4');
            location.textContent = temples.location;

            let dedicated = document.createElement('h4');
            dedicated.textContent = `Dedicated: ${temples.dedicated}`;

            let address = document.createElement('h4');
            address.textContent = `${temples.address}`;

            let telephone = document.createElement('h4');
            telephone.textContent = `Phone: ${temples.telephone}`;

            let email = document.createElement('h4');
            email.textContent = `Email: ${temples.email}`;

            let img = document.createElement('img');
            img.setAttribute('src', temples.imageUrl);
            img.setAttribute('alt', temples.templeName);

            let services = document.createElement('h5');
            services.textContent = `Services: ${temples.services}`;

            let history = document.createElement('h5');
            history.textContent = `History: ${temples.history}`;

            let ordinanceschedule = document.createElement('h5');
            ordinanceschedule.textContent = `Ordinance Schedule: ${temples.ordinanceschedule}`;

            let ordinanceschedule2 = document.createElement('h5');
            ordinanceschedule2.textContent = `${temples.ordinanceschedule2}`;

            let sessionschedule = document.createElement('h5');
            sessionschedule.textContent = `Sessions: ${temples.sessionschedule}`;

            let closureschedule = document.createElement('h5');
            closureschedule.textContent = `Temple Closures: ${temples.closureschedule}`;

            let spacer = document.createElement('br');
            spacer.textContent = ``;


            article.appendChild(likebutton);
            article.appendChild(templeName);
            article.appendChild(location);
            article.appendChild(dedicated);
            article.appendChild(address);
            article.appendChild(telephone);
            article.appendChild(email);
            article.appendChild(img);
            article.appendChild(services);
            article.appendChild(history);
            article.appendChild(ordinanceschedule);
            article.appendChild(ordinanceschedule2);
            article.appendChild(sessionschedule);
            article.appendChild(closureschedule);
            article.appendChild(spacer);
            article.appendChild(spacer);

            article.setAttribute("class", "box");
            article.setAttribute("id", "alltemples");

            templegroup.appendChild(article);
        }

function outputOne(temples)
        {
            let article = document.createElement('section');

            let templeName = document.createElement('h3');
            templeName.textContent = temples.templeName;

            let location = document.createElement('h4');
            location.textContent = `Find us in beautiful ${temples.location}`;

            let dedicated = document.createElement('h4');
            dedicated.textContent = `Dedicated: ${temples.dedicated}`;

            let img = document.createElement('img');
            img.setAttribute('src', temples.imageUrl);
            img.setAttribute('alt', temples.templeName);

            article.setAttribute('id', "spot1");

            article.appendChild(templeName);
            article.appendChild(location);
            article.appendChild(dedicated);
            article.appendChild(img);

            featuredtemple.appendChild(article);
        }

function Onetemple(temples)
{
return temples.templeName == "FEATURED... Payson Utah Temple";
}

const url = 'https://nclhowell.github.io/wdd230/templeinn/data/temples.json';
// const url = './data/temples.json';
let results = null;
fetch(url)
.then((response) => {
  if (response.ok) {
    return response.json();
  } else {
    console.log("error:", response);
  }
})
.then((data) => {
  templeArray = data;
  templeArray.map(output);
  templeArrayOnetemple = templeArray.filter(Onetemple);
  templeArrayOnetemple.map(outputOne);
});