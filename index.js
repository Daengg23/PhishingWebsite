console.log("Scripts Loaded");

const startup = document.getElementById("startup");
const main = document.getElementById("main");


function fade() {
    console.log("clicked");
    startup.classList.add("fade-away");
    main.classList.remove("hidden");
    setTimeout(() => {
        startup.classList.add("hidden");
        document.querySelector('html').classList.add("background");
    },2000);
    main.classList.add("appear-main-page");

}

main.style.visibility = "hidden";