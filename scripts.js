console.log("Scripts Loaded");


const div_login_box = document.getElementById('login-box');
const div_pay_pal_logo = document.getElementById('pay-pal-logo');
const div_main_page = document.getElementById("email-box");

function youClicked(){
    console.log("clicked");
    div_login_box.classList.add("shift-away");
    div_pay_pal_logo.classList.add("fade-away");
    div_main_page.style.display = "block";
}