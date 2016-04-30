var but = document.getElementById('login');

var account = {user: "mazda", password: "mazdaisawesome"};

but.addEventListener('click',function login(){
    
    var user = document.forms["mazda"]["user"].value;
    var pass = document.forms["mazda"]["pass"].value;
    var user_id = document.getElementById("user");
    var pass_id = document.getElementById("pass");
    var blank_user = document.getElementById("blank_user");
    var blank_pass = document.getElementById("blank_pass");
    var err_user = document.getElementById("wrong_user");
    var err_pass = document.getElementById("wrong_pass");
    
    if ((user == null || user =="") && (pass == null || pass =="")){
        user_id.className = "red";
        pass_id.className = "red";
        blank_user.className="display";
        blank_pass.className="display"; 
        err_user.className = "clear";
        err_pass.className = "clear";
        
    }
    
    else if (user == null || user == ""){
        user_id.className="red";
        blank_user.className="display";
        blank_pass.className="clear"; 
       
    }
    
    else if(pass == null || pass == ""){
        pass_id.className="red";
        blank_user.className="clear";
        blank_pass.className="display";
        
    }
    
        else if(user == account.user && pass == account.password){
        window.location.href="inventory.html";
        pass_id.className="clear";
        user_id.className="clear";
        blank_pass.className="clear";
        blank_user.className="clear";
    }
    
    else if(user != account.user && user != "" && user != null && pass != account.password && pass!="null" && pass!= ""){
            blank_pass.className="clear";
            blank_user.className="clear";
            err_user.className="display";
            err_pass.className="display";
            user_id.className="red";
            pass_id.className="red";
        }
            
    else if(user != account.user && user != "" && user != null){
            err_user.className="display";
            pass_id.className="clear";
            blank_user.className="clear";
            blank_pass.className="clear";   
        }
        
    else if(pass != account.password && pass!="null" && pass!= ""){
            err_pass.className="display";
            user_id.className="clear";
            blank_user.className="clear";
            blank_pass.className="clear";
        }
        
    else if(user != account.user && user != "" && user != null && pass == account.password){
            err_user.className="display";
            pass_id.className="clear";
            blank_user.className="clear";
            blank_pass.className="clear";
        }
        
    else if(pass != account.password && pass!="null" && pass!= "" && user == account.user){
            err_pass.className="display";
            user_id.className="clear";
            blank_user.className="clear";
            blank_pass.className="clear";
        }



    
                     });


