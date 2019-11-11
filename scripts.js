console.log("Scripts Loaded");

const startup = document.getElementById("startup");
const main = document.getElementById("main");

function fade() {
    console.log("clicked");
    startup.classList.add("fade-away");
    main.classList.add("appear-main-page");
}


//sets these  to hidden on startup of page
main.style.visibility = "hidden";
