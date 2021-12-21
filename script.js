const scoreE = document.getElementById("score");
const startE = document.getElementById("start");
const timerE = document.getElementById("timer");
const gameE = document.querySelector(".game");
const holesE = document.querySelectorAll(".hole");

let score = 0;
let pr;

const wrong = document.querySelector("audio");
startE.onclick = function () {
  pr = true;
  gameE.classList.add("act");
  timerE.innerHTML = 59;
  scoreE.innerHTML = "0";
};

function finishGame() {
  pr = undefined;
  gameE.classList.remove("act");
}

holesE.forEach((element) => {
  element.onclick = function () {
    const condition = this.classList.contains("act");
    if (condition && pr) {
      score++;
      scoreE.innerHTML = score;
      element.classList.remove("up");
      element.classList.remove("act");
    } else if (pr) {
      wrong.currentTime = 0;
      wrong.play();
    }
  };
});

const timer = window.setInterval(() => {
  const content = mathRandomFrom(holesE);
  content.classList.add("up");
  content.classList.add("act");
  setTimeout(() => {
    content.classList.remove("up");
    setTimeout(() => {
      content.classList.remove("act");
    }, 400);
  }, 1000);
  let number = Number(timerE.textContent);
  if (number) {
    number--;
    timerE.textContent = number;
  } else {
    finishGame();
  }
}, 1000);

document.onkeyup = () => {
  const key = event.key;
  if (!"qweasd".includes(key)) {
    return;
  }
  const element = document.querySelector("." + key);
  element.click();
};
