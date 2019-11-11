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

function checkIfClicked(id){
    
    console.log("clicked mistake.");

    
    if (Array.from(document.getElementById(id).classList).includes("scam"))
        window.mistakes++;
    document.getElementById(id).classList.remove("scam");
    document.getElementById(id).classList.add("turn-red");
    mistakes_found.innerHTML = mistakes;
    checkWin();
}

function checkWin(){
    if(mistakes == 7){
        console.log("WINNNER");
        counter.innerHTML = "You Found Them All!";
        mistakes_found.innerHTML = "";
        counter.classList.add("turn-green");
    }
}


