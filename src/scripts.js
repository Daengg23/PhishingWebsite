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

function checkIfClicked(item){
    
    console.log("clicked");
    if(item == "fakeEmailAddress" && fakeEmailAddress == true){
        fakeEmailAddress = false;
        window.mistakes++;
    }
    if(item == "informalGreeting" && informalGreeting == true){
        informalGreeting = false;
        window.mistakes++;
    }
    if(item == "misSpelledName" && misSpelledName == true){
        misSpelledName = false;
        window.mistakes++;
    }
    if(item == "nonSense" && nonSense == true){
        nonSense = false;
        window.mistakes++;
    }
    if(item == "shortLink" && shortLink == true){
        shortLink = false;
        window.mistakes++;
    }
    if(item == "scareTactic" && scareTactic == true){
        scareTactic = false;
        window.mistakes++;
    }
    if(item == "badGrammar" && badGrammar == true){
        badGrammar = false;
        window.mistakes++;
    }
    document.getElementById(item).classList.add("turn-red");
    mistakes_found.innerHTML = mistakes;
    console.log(window.mistakes);
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


