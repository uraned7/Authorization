"use strict";

let user = [
    {
        "lg" : "admin",
        "ps" : "admin"
    },
    {
        "lg" : "user",
        "ps" : "user"
    }
]

let btnLog = document.querySelector(".btnLog");

btnLog.addEventListener("click", formWrap);

function formWrap(){
let blform = document.querySelector(".blform");
blform.style.display = "block";

let frmbut = document.querySelector(".frmbut");
frmbut.addEventListener("click", getLogPass);
}

function getLogPass(){
    let frmlog = document.querySelector(".frmlog");
    let frmpass = document.querySelector(".frmpass");
    //ЪъЪъЪъЪъЪ ddddddd

    console.log("Login -> "+ frmlog)
    console.log("Password -> "+ frmlog)
    checkLogPass(frmlog.frmpass)
}

function checkLogPass(frmlog,frmpass){
    let content = document.querySelector(".content")
    for (const user of users){
        if(user.lg == frmlog && user.ps == frmpass){
            flag = true;
            content.innerHTML = 'Hello, $(frmlog)'

            let blform = document.querySelector(".blfore");
            blform.style.display = "none";

            break;
        }
    }
    if(!flag){
        content.innerHTML = 'Error!';
    }
}   