let homeScore = 0;
let guestScore = 0;

document.getElementById("home-score").textContent = homeScore;
document.getElementById("guest-score").textContent = guestScore;

function add1(){
     homeScore = homeScore + 1;
     document.getElementById("home-score").textContent = homeScore;
}

function add2(){
    homeScore = homeScore + 2;
    document.getElementById("home-score").textContent = homeScore;
}

function add3(){
    homeScore = homeScore + 3;
    document.getElementById("home-score").textContent = homeScore;
}
function add4(){
    guestScore = guestScore + 1;
    document.getElementById("guest-score").textContent = guestScore;
}
function add5(){
    guestScore = guestScore + 2;
    document.getElementById("guest-score").textContent = guestScore;
}
function add6(){
    guestScore = guestScore + 3;
    document.getElementById("guest-score").textContent = guestScore;
}
