var button = document.getElementById("submit");
var error = document.getElementById("error");

button.addEventListener('click', function load(){
    var action = document.forms["request"]["action"].value;
    
    
    if(action == "view"){
        window.location.href="view.html";
    }
    else if(action == "insert"){
        window.location.href="insert.html";
    }
    else if(action == "delete"){
        window.location.href="delete.html";
    }
    else if(action == "update"){
        window.location.href="update.html";
    }
    else{
        error.className="red";
    }
});