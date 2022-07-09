let templeArray = []; 
let templeArrayOnetemple = []; 
const featured = document.querySelector("#featuredtemple");

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

            featured.appendChild(article);
        }

function Onetemple(temples)
{
return temples.templeName == "FEATURED... Vernal Utah Temple";
}

const url = 'https://nclhowell.github.io/wdd230/templeinn/data/temples.json';
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
  /*templeArray.map(output);*/
  templeArrayOnetemple = templeArray.filter(Onetemple);
  templeArrayOnetemple.map(outputOne);
});