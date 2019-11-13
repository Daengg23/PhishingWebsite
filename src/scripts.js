window.mistakes = 0;
let fakeEmailAddress = true;
let informalGreeting = true;
let misSpelledName = true;
let nonSense = true;
let shortLink = true;
let scareTactic = true;
let badGrammar = true;

const mistakes_found = document.getElementById("mistakes-found");
const counter = document.getElementById("counter");

function check(q){
    
    if (Array.from(document.querySelector(q).classList).includes("scam")) {

        document.querySelector(q).classList.remove("scam");
        document.querySelector(q).classList.add("turn-red");
        mistakes_found.innerHTML = ++window.mistakes;

        checkWin();
    }  
    
}

function checkWin(){
    if(mistakes == 8){
        console.log("WINNNER");
        counter.innerHTML = "You Found Them All!";
        mistakes_found.innerHTML = "";
    }
}


