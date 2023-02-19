"use strict";

let flag = false;
let IsLoginActive = false;
let IsRegistrationActive = false;
let IsDescActive = false;
let users = [
    {
        "login" : "admin",
        "password" : "admin",
        "privilege" : "admin"
    },
    {
        "login" : "user",
        "password" : "user",
        "privilege" : "user"
    }
];

let btnlog = document.querySelector(".btnlog");

function formwrap() {
    let content = document.querySelector(".content");
    let btnreg = document.querySelector(".btnreg")
    let blform = document.querySelector(".blform");
let regform = document.querySelector(".regform")

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
    if(IsRegistrationActive){
        regform.style.display = "none"
        IsRegistrationActive = !IsRegistrationActive

    }
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
        if (user.login == frmlog && user.password == frmpass) {
            flag = true;
            content.innerHTML = `Hello, ${frmlog}`;
            
            if(user.privilege == "user"){
                content.innerHTML+= `<br></br>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <p>`
            } else if(user.privilege == "admin"){
                content.innerHTML += `<br></br>
                <img src="Images/Pufferfish.jpg"></img>`
            }

            let blform = document.querySelector(".blform");
            blform.style.display = "none";
            btnlog.textContent = "Log Out"
            btnreg.style.display = "none";
            IsLoginActive = false;
            break;
        } else {
        content.innerHTML = `Error!`;
        }
    }
}

function registrationForm(){
let regform = document.querySelector(".regform")
let blform = document.querySelector(".blform");

    if(IsRegistrationActive){
        regform.style.display = "none";
    } else{
        regform.style.display = "inline-flex";
    }
    IsRegistrationActive = !IsRegistrationActive;

    if(IsLoginActive){
        blform.style.display = "none"
        IsLoginActive = !IsLoginActive
    }
}

function getRegInfo(){
    let reglog = document.querySelector("#reglog").value;
    let regpass = document.querySelector("#regpass").value;

    console.log("Login -> "+ reglog);
    console.log("Password -> "+ regpass);
    checkRegName(reglog,regpass);
}

function checkRegName(reglog, regpass){
    let content = document.querySelector(".content");
    let IsNameTaken = false;

    for(const user of users){
        if(user.login == reglog){
            content.innerHTML = `Такой логин уже существует`;
        IsNameTaken = true
        } 
    }
    if(!IsNameTaken){
        users.push({
           "login" : reglog,
        "password" : regpass,
        "privilege" : "user"
    });
        content.innerHTML = `Пользователь ${reglog} успешно зарегистрирован`;
    }
}

function reset_password(){
    let frmlog = document.querySelector("#frmlog").value;
    let content = document.querySelector(".content");


    for(const user of users){
        if(user.login == frmlog){
            content.innerHTML = `Ваш пароль: ${user.password}`;
            return;
        }
    }
}

function sliderItemDescription(Title, Description){
    let slide_description = document.querySelector(".slide_description")
    let SlDescTitle = document.querySelector("#SlDescTitle");
    let SlDescText = document.querySelector("#SlDescText");

    SlDescTitle.innerHTML = `${Title}`;
    SlDescText.innerHTML = `${Description}`;

    if(!IsDescActive){
        IsDescActive == true;
        slide_description.style.display = "block"
    }
}