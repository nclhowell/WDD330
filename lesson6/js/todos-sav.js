// function showClick(theButtonClicked) {
//document.getElementById("temp_display").innerHTML =
//`<p>Button Clicked</p>`
//  theButtonClicked.innerHTML = "X"
//};
const todoarray = [];

function loadTodo() {
    var storyName = document.getElementById("name_input").value
    var storyHTML = localStorage.getItem(storyName)
    document.getElementById("story_editor").value = storyHTML
};

function saveTodo() {
    var storyName = document.getElementById("name_input").value
    var storyHTML = document.getElementById("story_editor").value
    localStorage.setItem(storyName, storyHTML)
    document.getElementById("name_input").value = storyName
};

    function displayTodoArr() {
        alert("Hozed");
        const artodo = document.getElementById("todo_in").value;
        todoarray.push(artodo);
        document.getElementById("todo_array_display").innerHTML= todoarray[todoarray.length -1]; 
    /*document.getElementById("story_editor").innerText = "" 
    var storyHTML = document.getElementById("story_editor").value
    document.getElementById("todo_display").innerHTML = storyHTML
    document.getElementById("story_editor").innerHTML = "Enter Your Next Todo" 
    */
};

function displayTodo() {
    const todolinode = document.createElement("li");
    const todo = document.getElementById("todo_in").value;
    const todoinputobj = document.getElementById("todo_in")
    // const todo = document.getElementById("todo_in").value;
    const inputvalue = document.createTextNode(`${todo}`);
    todolinode.appendChild(inputvalue);
    document.getElementById("todo_display").appendChild(todolinode);
    // const todoarrnode = document.createElement("li");
    // todoarray.push(todo);
    // document.getElementById("todo_display_array").innerHTML= "test";

/* let txt = document.createTextNode(todo);
 alert(inputvalue);
todolinode.appendChild(inputvalue);
   if (inputvalue === '') {
      alert("NO DATA HERE");
 document.getElementById("todo_display").value = `Input Todo Here`;

   } else {
        document.getElementById("todo_display").appendChild(li);
    }
    document.getElementById("todo_in").value = "Enter a New To Do Item";

  const span = document.createElement("SPAN");
  const txt2 = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt2);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }*/
}