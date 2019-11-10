console.log("Scripts Loaded");


const div_login_box = document.getElementById('login-box');
const div_pay_pal_logo = document.getElementById('pay-pal-logo');
const div_main_page = document.getElementById('main-page');
const div_warning_message = document.getElementById('warning-message');

function youClicked(){
    console.log("clicked");
    div_login_box.classList.add("shift-away");
    div_pay_pal_logo.classList.add("fade-away");
    div_warning_message.classList.add("appear-warning-message");
    div_main_page.classList.add("appear-main-page");
}

//sets these  to hidden on startup of page
div_main_page.style.visibility = "hidden";
div_warning_message.style.visibility = "hidden";