// popup.js

var listCount = 3;

// Add item to listed when clicked
document.addEventListener('DOMContentLoaded', function () {
    var myList = document.getElementById('myUL');
    
    // onClick
    myList.addEventListener('click', function () {
        changeText();
        addList();
    });
});

function addList() {
    var ul = document.getElementById("myUL");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("Add New Clip..."));
    li.setAttribute("id", "l2");
    ul.appendChild(li);
}

function changeText() {
    var l = document.getElementById("l1");
    l.textContent = "HELLO";
}
