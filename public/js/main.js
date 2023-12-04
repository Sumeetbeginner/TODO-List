
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


let currentPage;

function openMenuBarPhone(currentId){

    currentPage = currentId;

    document.getElementById(currentId).style.display = "none";

    document.getElementById("sideBarPhone1").style.marginLeft = "0%"

}

function closeMenuBar(){

    setTimeout(() => {
        document.getElementById(currentPage).style.display = "block";
    }, 500);

    document.getElementById("sideBarPhone1").style.marginLeft = "-80%"
}

function openThemePage(){

    
    document.getElementById("homePage1").style.display = "none"
    document.getElementById("themePage1").style.display = "block"
    document.getElementById("catPage1").style.display = "none"
    document.getElementById("anaPage1").style.display = "none"
    document.getElementById("settPage1").style.display = "none"

    document.getElementById("pmenuItem0").style.backgroundColor = "#2f3046";
    document.getElementById("pmenuItem1").style.backgroundColor = "#eb06ff";
    document.getElementById("pmenuItem2").style.backgroundColor = "#2f3046";
    document.getElementById("pmenuItem3").style.backgroundColor = "#2f3046";
    document.getElementById("pmenuItem4").style.backgroundColor = "#2f3046";

    document.getElementById("menuItem0").style.backgroundColor = "#2f3046";
    document.getElementById("menuItem1").style.backgroundColor = "#eb06ff";
    document.getElementById("menuItem2").style.backgroundColor = "#2f3046";
    document.getElementById("menuItem3").style.backgroundColor = "#2f3046";
    document.getElementById("menuItem4").style.backgroundColor = "#2f3046";



}
function openCatPage(){

    
    document.getElementById("homePage1").style.display = "none"
    document.getElementById("themePage1").style.display = "none"
    document.getElementById("catPage1").style.display = "block"
    document.getElementById("anaPage1").style.display = "none"
    document.getElementById("settPage1").style.display = "none"

    document.getElementById("pmenuItem0").style.backgroundColor = "#2f3046";
    document.getElementById("pmenuItem1").style.backgroundColor = "#2f3046";
    document.getElementById("pmenuItem2").style.backgroundColor = "#eb06ff";
    document.getElementById("pmenuItem3").style.backgroundColor = "#2f3046";
    document.getElementById("pmenuItem4").style.backgroundColor = "#2f3046";

    document.getElementById("menuItem0").style.backgroundColor = "#2f3046";
    document.getElementById("menuItem1").style.backgroundColor = "#2f3046";
    document.getElementById("menuItem2").style.backgroundColor = "#eb06ff";
    document.getElementById("menuItem3").style.backgroundColor = "#2f3046";
    document.getElementById("menuItem4").style.backgroundColor = "#2f3046";


}
function openAnaPage(){

    
    document.getElementById("homePage1").style.display = "none"
    document.getElementById("themePage1").style.display = "none"
    document.getElementById("catPage1").style.display = "none"
    document.getElementById("anaPage1").style.display = "block"
    document.getElementById("settPage1").style.display = "none"

    document.getElementById("pmenuItem0").style.backgroundColor = "#2f3046";
    document.getElementById("pmenuItem1").style.backgroundColor = "#2f3046";
    document.getElementById("pmenuItem2").style.backgroundColor = "#2f3046";
    document.getElementById("pmenuItem3").style.backgroundColor = "#eb06ff";
    document.getElementById("pmenuItem4").style.backgroundColor = "#2f3046";

    document.getElementById("menuItem0").style.backgroundColor = "#2f3046";
    document.getElementById("menuItem1").style.backgroundColor = "#2f3046";
    document.getElementById("menuItem2").style.backgroundColor = "#2f3046";
    document.getElementById("menuItem3").style.backgroundColor = "#eb06ff";
    document.getElementById("menuItem4").style.backgroundColor = "#2f3046";



}
function openSettPage(){

    
    document.getElementById("homePage1").style.display = "none"
    document.getElementById("themePage1").style.display = "none"
    document.getElementById("catPage1").style.display = "none"
    document.getElementById("anaPage1").style.display = "none"
    document.getElementById("settPage1").style.display = "block"

    document.getElementById("pmenuItem0").style.backgroundColor = "#2f3046";
    document.getElementById("pmenuItem1").style.backgroundColor = "#2f3046";
    document.getElementById("pmenuItem2").style.backgroundColor = "#2f3046";
    document.getElementById("pmenuItem3").style.backgroundColor = "#2f3046";
    document.getElementById("pmenuItem4").style.backgroundColor = "#eb06ff";

    document.getElementById("menuItem0").style.backgroundColor = "#2f3046";
    document.getElementById("menuItem1").style.backgroundColor = "#2f3046";
    document.getElementById("menuItem2").style.backgroundColor = "#2f3046";
    document.getElementById("menuItem3").style.backgroundColor = "#2f3046";
    document.getElementById("menuItem4").style.backgroundColor = "#eb06ff";



}
function openHomePage(){

    
    document.getElementById("homePage1").style.display = "block"
    document.getElementById("themePage1").style.display = "none"
    document.getElementById("catPage1").style.display = "none"
    document.getElementById("anaPage1").style.display = "none"
    document.getElementById("settPage1").style.display = "none"

    document.getElementById("pmenuItem0").style.backgroundColor = "#eb06ff";
    document.getElementById("pmenuItem1").style.backgroundColor = "#2f3046";
    document.getElementById("pmenuItem2").style.backgroundColor = "#2f3046";
    document.getElementById("pmenuItem3").style.backgroundColor = "#2f3046";
    document.getElementById("pmenuItem4").style.backgroundColor = "#2f3046";

    document.getElementById("menuItem0").style.backgroundColor = "#eb06ff";
    document.getElementById("menuItem1").style.backgroundColor = "#2f3046";
    document.getElementById("menuItem2").style.backgroundColor = "#2f3046";
    document.getElementById("menuItem3").style.backgroundColor = "#2f3046";
    document.getElementById("menuItem4").style.backgroundColor = "#2f3046";



}

document.getElementById('datePicker').valueAsDate = new Date();

function openTaskForm(){
  
const mediaQuery = window.matchMedia('(min-width: 1025px)')

if (mediaQuery.matches) {
    // console.log("matched1");
    document.getElementById("taskGenerator1").style.marginTop = "-45vh"
    document.getElementById("taskGenerator1").style.top = "50%"
}
else{
    // console.log("matched");
    document.getElementById("taskGenerator1").style.top = "0%"
}
}