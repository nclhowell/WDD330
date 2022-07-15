// initialize menu elements
const menuitems = document.querySelector("menuitems");
let menuarray = [];
// git URL.  Use this when pushing to repo 
// const url = 'https://nclhowell.github.io/wdd330/data/menuitems.json';
// local access to menuitems.json 
const url = "./data/menuitems.json";
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
        menuarray = data;
        menuarray.map(output);
    });

let templeArrayOnetemple = [];

let featured = document.getElementById("menuitems");

function output(menuarray) {
    let menulistitem = document.createElement('li');
    menulistitem.innerHTML = `<a href=${menuarray.menulink}>${menuarray.menuitem}</a>`;
    featured.appendChild(menulistitem);
}