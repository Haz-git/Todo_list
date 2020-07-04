var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
// var globalLi = document.querySelectorAll("li");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    var del = document.createElement("button");
    li.className = "newLi";
    del.className = "deleteButton";
    del.innerHTML = "Delete";
    del.addEventListener("click", toggleDel)
    li.appendChild(document.createTextNode(input.value));
    li.addEventListener("click", strikeT);
    ul.appendChild(li);
    li.appendChild(del);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

function toggleDel() {
    this.parentNode.remove();
}

function strikeT() {
    this.className = "done";
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
// globalLi.addEventListener("click", toggleDone);
// ul.addEventListener("click", toggleDone);

// List object is clicked:
// .done class is turned on (set into the list item)
// List object's html is strikethrough