const list = document.querySelector("#biguglylist");
const input = document.querySelector('input');
const button = document.querySelector('button');

/*button.onclick = function() {*/
button.addEventListener("click", () => {
  let myItem = input.value;
  input.value = '';

  const listchoice = document.createElement('li');
  const listtext = document.createElement('span');
  const deletebutton = document.createElement('button');

  listchoice.appendChild(listtext);
  listtext.textContent = myItem;
  listchoice.appendChild(deletebutton);
  deletebutton.textContent = 'Delete';
  list.appendChild(listchoice);

  deletebutton.onclick = function (e) {
    list.removeChild(listchoice);
  }

  input.focus();
});

/* const button = qs("button");
const list = qs("#list");
const choice = ``; 
button.addEventListener("click", () => {
  let choice = input.value;

  const listelement = document.createElement('li');
  const listchoice = document.createElement("span"); 
  const deletebutton = document.createElement('button');

  deletebutton.textContent = `Click to Delete` ;

  listchoice.textContent = choice;
  listelement.appendChild(listchoice);
  listelement.appendChild(deletebutton);
  list.appendChild(listitem);
}); 
*/

/* Handy Shortcuts */
function qs(selector) {
    return document.querySelector(selector);
  }

  function setHtml(selector, text) {
    qs(selector).innerHTML = text;
  }

  function ce(element) {
    return document.createElement(element);
  }

  function ge(element) {
    return document.getElementById(element);
  }
