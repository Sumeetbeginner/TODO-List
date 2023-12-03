
//* Collecting User Name 
{
let user_name;

(function new_user() {

    if (localStorage.getItem("NewUser") == "false") {

        // console.log("Not a New User");

    }
    else {
        user_name = prompt("Enter Your Name : ");

        if(user_name == "" || user_name == null){
             
            validate_name();
        }

        localStorage.setItem("UserName", user_name);
        localStorage.setItem("NewUser", "false");
    }

})();

function validate_name(){

    user_name = prompt("Kindly Enter Your Name ⚠️ : ");

    if(user_name == "" || user_name == null ){
        validate_name();
    }
}
}

document.getElementById("userName").innerHTML= "Hello, " + localStorage.getItem("UserName") + "!";
document.getElementById("userName1").innerHTML= "Hello, " + localStorage.getItem("UserName") + "!";


function openMenuBarPhone(){

    document.getElementById("topBarPhone1").style.display = "none";

    document.getElementById("sideBarPhone1").style.marginLeft = "0%"

}

function closeMenuBar(){

    setTimeout(() => {
        document.getElementById("topBarPhone1").style.display = "flex";
    }, 500);

    document.getElementById("sideBarPhone1").style.marginLeft = "-80%"
}