//mes variables
let ordre = [];
let joueurTour = [];
let flash;
let turn;
let point;
let PcTour;
let son = true;
let intervalId;
let bon;
let win;

// mes constantes
const score = document.querySelector("#score");
const click = document.querySelector("#click");
const csRed = document.querySelector("#red");
const csBlue = document.querySelector("#blue");
const csGreen = document.querySelector("#green");
const csYellow = document.querySelector("#yellow");

//va créer des données aléatoirement par rangée de 4
function Move() {
  for (var i = 0; i < 20; i++) {
    ordre.push(Math.floor(Math.random() * 4) +1);
  }
}


function play() {
  win = false;
  ordre = [];
  turn = 1;
  score.innerHTML += turn;
  joueurTour = [];
  flash = 0;
  intervalId = 0;
  Move();

  PcTour = true;

  intervalId = setInterval(simonTour, 1000)


}

function replay() {

  win = false;
  ordre = [];
  turn = 1;
  score.innerHTML = "Score :";
  joueurTour = [];
  flash = 0;
  intervalId = 0;
  play();

  PcTour = true;

  intervalId = setInterval(simonTour, 1000)
  
  }


function simonTour() {
  if (flash == turn) {
    clearInterval(intervalId)
    PcTour =false;
    clearColor();
  }

    if (PcTour) {
      clearColor();
      setTimeout(() => {
        if (ordre[flash] == 1) red();
        if (ordre[flash] == 2) blue();
        if (ordre[flash] == 3) green();
        if (ordre[flash] == 4) yellow();
        flash++;
      }, 200);

    }

}

// permet de remettre la couleur d'origine
function clearColor() {
  csRed.style.backgroundColor = "red";
  csBlue.style.backgroundColor = "blue";
  csGreen.style.backgroundColor = "green";
  csYellow.style.backgroundColor = "yellow";
}
//permet de jouer et faire briller touche
function red() {
  if (son) {

    let audio = document.getElementById("do");
    audio.play();
  }

  son = true;
  csRed.style.backgroundColor = "tomato";
}

function blue() {
  if (son) {

    let audio = document.getElementById("re");
    audio.play();
  }

  son = true;
  csBlue.style.backgroundColor = "lightskyblue";
}

function green() {
  if (son) {

    let audio = document.getElementById("mi");
    audio.play();
  }

  son = true;
  csGreen.style.backgroundColor = "lightgreen";
}

function yellow() {
  if (son) {

    let audio = document.getElementById("fa");
    audio.play();
  }

  son = true;
  csYellow.style.backgroundColor = "white";
}

//permet au joueur de cliquer sur les touches
function clickRed() {
  red(); 
  point = 1;
  click.innerHTML += point;
  setTimeout(() => {
    clearColor();

  }, 200)
}

function clickBlue() {
  blue();
  point = 1;
  click.innerHTML += point;
  setTimeout(() => {
    clearColor();

  }, 200)
}

function clickGreen() {
  green();
  point = 1;
  click.innerHTML += point;
  setTimeout(() => {
    clearColor();

  }, 200)
}

function clickYellow() {
  yellow();
  point = 1;
  click.innerHTML += point;
  setTimeout(() => {
    clearColor();

  }, 200)
}

//permet de vérifier si le joueur a bon
function check() {

  if (joueurTour[joueurTour.length] == pcTour[pcTour.length]) {
    turn++;
    joueurTour = [];
    pcTour = true;
    flash = 0;
    score.innerHTML += turn;
    intervalId = setInterval(gameTurn, 800);
    Move();
  }
  }
  









