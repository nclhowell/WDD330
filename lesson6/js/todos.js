// Local Storage I/O
localtodoarray = [];

// Set type key to default of "todos" which is the localStorage key for the all todos list 
globaltypekey = "todos";

// savetodo function writes new todo's to local storage using temp array stored_todos
// we push the new item onto the stored_todos[] array, then dump it to the appropriate local Storage 
function savetodo(typekey) {
  let new_todo = document.getElementById("todoInput").value;
  if (localStorage.getItem(typekey) == null) {
    localStorage.setItem(typekey, "[]");
  }
  stored_todos = JSON.parse(localStorage.getItem(typekey));
  stored_todos.push(new_todo);

  localStorage.setItem(typekey, JSON.stringify(stored_todos));
  stored_todos.splice(0, (stored_todos.length))
  document.getElementById("todoInput").value = "";
}

// Call display function with local storage key (typekey variable) to determine which todo type to show
// the keys will be either "todo" (all todo's), "donetodo" (completed)
function viewtodo(typekey) {
  document.getElementById("todoUL").innerHTML = "";
  if (localStorage.getItem(typekey) != null) {
    localtodoarray = JSON.parse(localStorage.getItem(typekey));
  }
  localtodoarray.forEach(displaytodos);
}

// displaytodos is called from the viewtodo function where a single item pulled from local storage
// into localtodoarray[] is passed to the display function where the dom objects are built and 
// populated into the "todoUL" dom ul. 
function displaytodos(item) {
  li = document.createElement("li");
  t = document.createTextNode(item);
  li.appendChild(t);
  document.getElementById("todoUL").appendChild(li);
  document.getElementById("todoInput").value = "";
  span = document.createElement("SPAN");
  txt = document.createTextNode("X");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span)
}

// blasttodo brutally clears all storage and reloads the dom
function blasttodo() {
  localStorage.clear();
  location.reload()
}

// This section loosly adopted from W3 Schools todo list tutorial.  Heavily modified 
// and retrofitted.  Found several functions and loops that were completely or partially redundant
// which were removed.
// close button click hides the current list item and changes state of close element
// append close button to each list item
// Note... I will not be taking this approach again.  Took way too long trying to retrofit
// The local storage into something that only runs in memory and stores things in the dom. 
const todoNodelist = document.getElementsByTagName("LI");
i = 0;
for (i = 0; i < todoNodelist.length; i++) {
  span = document.createElement("SPAN");
  // Add X object for CSS deletion class change  
  txt = document.createTextNode("X");
  // close CSS classname allows object attribute change so CSS can hide if clicked
  span.className = "close";
  span.appendChild(txt);
  todoNodelist[i].appendChild(span);
}

// Initialize global close variable for later use 
close = document.getElementsByClassName("close");

// Insert "checked" symbol when list item clicked
list = document.querySelector('ul');
list.addEventListener('click', function (event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
    // This allows for a mouse click anywhere on the p element and adds a check
    // to indicate the todo is done
    document.getElementById("todoInput").value = event.target.innerText;
    //  call savetodo function to write to local storage with the "donetodo" key
    savetodo(`donetodo`);
  }
}, false);


// This section loosly adopted from W3 Schools todo list tutorial.  Heavily modified 
// and retrofitted.  Found several functions and loops that were completely or partially redundant
// which were removed.
// Close button click hides the current list item and changes state of close element
// append close button to each list item
// Note... I will not be taking this approach again.  Took way too long trying to retrofit
// The local storage into something that only runs in memory and stores things in the dom. 
// newElement function creates and display a new list item based upon the dom value in
// The "Enter New Todo Here" section 

function newElement() {

  // store dom input element with id "todoInput" into local storage

  let typekey = globaltypekey;
  //  Writes new entry into local storage of appropriate key value in variable argument "typekey".  
  // 3 keys explained earlier are:
  // todo (all todos), donetodo (completed), and deletedtodo (deleted todos)

  savetodo(typekey);

  // load all todos rom local storage into local array for manipulation
  localtodoarray = JSON.parse(localStorage.getItem(typekey));
  li = document.createElement("li");
  //  Most recent value pulled from locatodoarray 
  inputValue = localtodoarray[localtodoarray.length - 1];

  // Process for construction of dom ul and l elements 
  t = document.createTextNode(inputValue);
  li.appendChild(t);

  if (inputValue === '') {} else { //do nothing here

  //  Append li to todoUL ul dom element
    document.getElementById("todoUL").appendChild(li);
  }

  // Here is where the checkbox target span element is prepended onto the li element for 
  // Mouse click attribute change which in turn allows CSS display a checkmark attribute 

  document.getElementById("todoInput").value = "";
  span = document.createElement("SPAN");
  txt = document.createTextNode("X");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  // Here is where the X target span element is appended onto the li element for 
  // Mouse click attribute change which in turn allows CSS display attribute to hide 
  // the dom todo li item 

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;

  // CSS hide attribute if dom "X" target element is clicked 
      div.style.display = "none";
  // debug div.style.color = "green";
      document.getElementById("todoInput").value = div.innerText;
  // save this element to local storage using "deletedtoto" key value pair
      savetodo(`deletedtodo`);

    }
  }
  // reset "Enter new Todo" area
  document.getElementById("todoInput").innerHTML = ""
}