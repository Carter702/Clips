// popup.js




 document.addEventListener('DOMContentLoaded', function() {
    var mySubmitButton = document.getElementById('l1');
    // onClick's logic below:
    mySubmitButton.addEventListener('click', function() {
        addList();
    });
});

 function addList() {
  var ul = document.getElementById("myUL");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode("Add New Clip..."));
  li.setAttribute("id", "element4"); // added line
  ul.appendChild(li);
 } 