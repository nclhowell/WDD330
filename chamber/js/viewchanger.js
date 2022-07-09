document.getElementById("listbutton").addEventListener("click", listFunction);

function listFunction() {
    document.getElementById("testbutton").innerHTML = "YOU CLICKED????";
    document.getElementById("viewtag").innerHTML = "YOU CLICKED????"
    //document.getElementById("viewtag").className = "newlist";
    gridview = document.getElementById("viewtag");
    gridview.remove();
}