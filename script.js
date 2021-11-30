const timerEl = document.getElementById("timer");
const msgBox = document.getElementById("msgBox");
const score = document.getElementById("score");
const holes = document.querySelectorAll(".hole");
let timerHole;
const aud = new Audio("/1.mp3");

const mathRandom = (min = 0, max = 5) => {
  min = Math.ceil(min);
  return Math.floor(Math.random() * (Math.floor(max) - min + 1) + min);
};

function startGame() {
  let i = 60;
  const aTimer = window.setInterval(() => {
    i--;
    timerEl.textContent = i;
    if (i < 0) {
      window.clearInterval(aTimer);
      window.clearInterval(timerHole);
      timerEl.textContent = "...";
      endEv();
    }
  }, 1000);

  stEv();

  timerHole = window.setInterval(() => {
    moleUp();
  }, 800);
}

function moleUp() {
  const index = mathRandom();
  holes[index].classList.add("up");
  setTimeout(() => {
    holes[index].classList.remove("up");
  }, 1000);
}
function runOnClick() {
  const status = this.classList.contains("up");
  if (status) {
    score.innerHTML = Number(score.innerHTML) + 1;
    msgBox.innerHTML = "";
  } else {
    msgBox.innerHTML = "Wrong!";
    aud.play();
    setTimeout(() => {
      msgBox.innerHTML = "";
    }, 600);
  }
  //----
  this.classList.remove("up");
  moleUp();
}
function stEv() {
  holes.forEach((element) => {
    element.addEventListener("click", runOnClick);
  });
}
function endEv() {
  holes.forEach((element) => {
    element.removeEventListener("click", runOnClick);
  });
}

document.addEventListener("keyup", function () {
  function clEd(param) {
    holes[param].click();
  }
  switch (event.key) {
    case "q":
      clEd(0);
      break;
    case "w":
      clEd(1);
      break;
    case "e":
      clEd(2);
      break;
    case "a":
      clEd(3);
      break;
    case "s":
      clEd(4);
      break;
    case "d":
      clEd(5);
      break;
  }
});
