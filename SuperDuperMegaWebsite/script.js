"use strict";

let flag = false;
let IsLoginActive = false;
let IsRegistrationActive = false;
let users = [
    {
        "lg" : "admin",
        "ps" : "admin"
    },
    {
        "lg" : "user",
        "ps" : "user"
    }
];

let btnlog = document.querySelector(".btnlog");

function formwrap() {
    let content = document.querySelector(".content");
    let btnreg = document.querySelector(".btnreg")
    let blform = document.querySelector(".blform");
    if(flag){
        blform.style.display = "inline-flex";
        btnlog.textContent = "Log In";
        btnreg.style.display = "flex";
        content.innerHTML = "";
        regform.style.display = "none";
        IsRegistrationActive = false;
        IsLoginActive = false;
        flag = !flag;
    }
    if(IsLoginActive){
        blform.style.display = "none";
    } else{
        blform.style.display = "inline-flex";
    }
    IsLoginActive = !IsLoginActive;
}

function getLogPass() {
    let frmlog = document.querySelector("#frmlog").value;
    let frmpass = document.querySelector("#frmpass").value;

    console.log("Login -> "+frmlog);
    console.log("Password -> "+frmpass);
    checkLogPass(frmlog, frmpass);
}

function checkLogPass(frmlog, frmpass) {
    
    let content = document.querySelector(".content");
    let btnreg = document.querySelector(".btnreg")
    for (const user of users) {
        if (user.lg == frmlog && user.ps == frmpass) {
            flag = true;
            content.innerHTML = `Hello, ${frmlog}`;
            
            if(frmlog == "user"){
                content.innerHTML+= `<br></br>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <p>`
            } else if(frmlog == "admin"){
                content.innerHTML += `<br></br>
                <img src="Pufferfish.jpg"></img>`
            }

            let blform = document.querySelector(".blform");
            blform.style.display = "none";
            btnlog.textContent = "Log Out"
            btnreg.style.display = "none";
            break;
        } else {
        content.innerHTML = `Error!`;
        }
    }
}

function registrationForm(){
let regform = document.querySelector(".regform")
    if(IsRegistrationActive){
        regform.style.display = "none";
    } else{
        regform.style.display = "inline-flex";
    }

    IsRegistrationActive = !IsRegistrationActive;
}

function getRegInfo(){
    let reglog = document.querySelector(".reglog").value;
    let regpass = document.querySelector(".regpass").value;
    checkRegName(reglog,regpass);
}

function checkRegName(reglog, regpass){
    let content = document.querySelector(".content");

    for(const user of users){
        if(user.lg != reglog){
            users.push([`${reglog}`,`${regpass}`]);
            content.innerHTML = `Пользователь ${reglog} успешно зарегистрирован`;
        } else{
        content.innerHTML = `Такой логин уже существует`;
        }
    }
}
