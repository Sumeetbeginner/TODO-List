
//* Collecting User Name 
{
    let user_name;

    (function new_user() {

        if (localStorage.getItem("NewUser") == "false") {

            // console.log("Not a New User");

        }
        else {
            user_name = prompt("Enter Your Name : ");

            if (user_name == "" || user_name == null) {

                validate_name();
            }

            localStorage.setItem("UserName", user_name);
            localStorage.setItem("NewUser", "false");
            localStorage.setItem("TaskNumber", "0");
            localStorage.setItem("taskData", JSON.stringify([{"empty" : "empty"}]));
        }

    })();

    function validate_name() {

        user_name = prompt("Kindly Enter Your Name ⚠️ : ");

        if (user_name == "" || user_name == null) {
            validate_name();
        }
    }
}

document.getElementById("userName").innerHTML = "Hello, " + localStorage.getItem("UserName") + "!";
document.getElementById("userName1").innerHTML = "Hello, " + localStorage.getItem("UserName") + "!";


let currentPage;

function openMenuBarPhone(currentId) {

    currentPage = currentId;

    document.getElementById(currentId).style.display = "none";

    document.getElementById("sideBarPhone1").style.marginLeft = "0%"

}

function closeMenuBar() {

    setTimeout(() => {
        document.getElementById(currentPage).style.display = "block";
    }, 500);

    document.getElementById("sideBarPhone1").style.marginLeft = "-80%"
}

function openThemePage() {


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
function openCatPage() {


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
function openAnaPage() {


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
function openSettPage() {


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
function openHomePage() {


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

function openTaskForm() {

    

    const mediaQuery = window.matchMedia('(min-width: 1025px)')

    if (mediaQuery.matches) {
        // console.log("matched1");
        document.getElementById("taskGenerator1").style.marginTop = "-45vh"
        document.getElementById("taskGenerator1").style.top = "50%"
    }
    else {
        // console.log("matched");
        document.getElementById("taskGenerator1").style.top = "0%"
    }
}

function closeTodoBox() {
    const mediaQuery = window.matchMedia('(min-width: 1025px)')

    if (mediaQuery.matches) {
        // console.log("matched1");
        document.getElementById("taskGenerator1").style.top = "-110%"
    }
    else {
        // console.log("matched");
        document.getElementById("taskGenerator1").style.top = "-110%"
    }

    document.getElementById("taskName1").value = "";
    document.getElementById("desc1").value ="";
}

function validateTaskName(){

    let taskName = document.getElementById("taskName1").value;

    if(taskName.length <= 5){
        alert("⚠️ Kindly Keep you Task Name with more than 5 Character")

        return false;
    }

    return true;
}

function addTaskFinal(){

    let valTaskName = validateTaskName()

    if(valTaskName){

        let currTaskNo = Number(localStorage.getItem("TaskNumber"));

        currTaskNo = currTaskNo + 1;

        let currTaskName = document.getElementById("taskName1").value;

        let currTaskCat = document.getElementById("chooseCat1").value;

        let currTaskDate = document.getElementById("datePicker").value;

        let currTaskPriority = document.getElementById("priority1").value;

        let currTaskDesc = document.getElementById("desc1").value;

        localStorage.setItem("TaskNumber", currTaskNo);

        let taskData = {
            "taskNo" : currTaskNo,
            "taskName" : currTaskName,
            "taskCat" : currTaskCat,
            "taskDate" : currTaskDate,
            "taskPriority" : currTaskPriority,
            "taskDesc" : currTaskDesc
        }

        let taskData1 = JSON.parse(localStorage.getItem("taskData"));

        taskData1.unshift(taskData);

        localStorage.setItem("taskData", JSON.stringify(taskData1));

        alert("✅ Task Added Successfully")

        document.getElementById("todoListBox").innerHTML = "";
        
        closeTodoBox();
        addTasksData();

    }
}

let categories = {
    'personal': '🧑‍🦰',
    'work': '💼',
    'study': '📚',
    'health': '🍎',
    'fitness': '🏃‍♂️',
    'entertainment': '🍿',
    'coding': '💻',
    'travel': '🚌',
    'others': '😀'
  };
  
function addTasksData(){

    let taskData1 = JSON.parse(localStorage.getItem("taskData"));

    for(let i = 0; i<taskData1.length - 1; i++){

       let taskBox =  document.createElement("div");
       taskBox.className = "taskBox";
       taskBox.id = "taskBox" + i;
       document.getElementById("todoListBox").appendChild(taskBox);

       let taskStatus = document.createElement("i");
       taskStatus.className = "fa-regular fa-circle";
       taskStatus.id = "taskStatus" + i;
       taskBox.appendChild(taskStatus);

       let taskName = document.createElement("p");
       taskName.className = "taskNameHere";
       taskName.id = "taskNameHere" + i;
       taskBox.appendChild(taskName);
       taskName.innerHTML = taskData1[i].taskName;

       let taskCat = document.createElement("p");
       taskCat.className = "taskCat";
       taskCat.id = "taskCat" + i;
       taskBox.appendChild(taskCat);
       taskCat.innerHTML = categories[taskData1[i].taskCat]

       if(taskData1[i].taskPriority == "1"){
        taskBox.style.border = "solid 2px red"
       }
       if(taskData1[i].taskPriority == "2"){
        taskBox.style.border = "solid 2px orange"
       }
       if(taskData1[i].taskPriority == "3"){
        taskBox.style.border = "solid 2px yellow"
       }

       
    }
}

addTasksData();