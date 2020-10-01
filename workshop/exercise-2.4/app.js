let win = document.createTextNode("You Win!");
let loose = document.createTextNode("You Loose...");
let showResult = document.getElementById("result");
let allClicked = false;
let button = document.querySelector("#button");
let timer = document.querySelector("#countdown");
let main = document.getElementById("main");
const numButtons = Math.floor(Math.random() * 10) + 1;
const clickedButtons = [];

let random = function () {
  return Math.floor(Math.random() * 6 + 2);
};
let timeLeft = random();

timer.innerText = timeLeft;

button.addEventListener("click", onButtonClick);
function onButtonClick() {
  button.style.visibility = "hidden";
  makeBuble();
  const timerDown = setInterval(() => {
    timeLeft--;
    timer.innerText = timeLeft;
    if (timeLeft <= 0) {
      timeLeft = 0;
      if (clickedButtons.length !== numButtons) {
        showResult.appendChild(loose);
        showResult.style.backgroundColor = "tomato";
        showResult.style.visibility = "visible";
      } else {
        showResult.appendChild(win);
        showResult.style.visibility = "visible";
      }
      clearInterval(timerDown);
    }
  }, 1000);
}

///////////////////////////////////////////////

// function isAllClicked() {
//   allClicked = true;
//   if (allClicked) {
//   }
// }

//////////////////////////////////////////////

function makeBuble() {
  for (let i = 0; i < numButtons; i++) {
    let div = document.createElement("div");
    div.className = "pop";
    div.addEventListener("click", changeColor);
    function changeColor() {
      clickedButtons.push(div);
      div.style.backgroundColor = "tomato";
      div.style.color = "white";
    }
    div.innerText = i + 1;
    div.style.top = `${setRandom()}px`;
    div.style.left = `${setRandom() + 400}px`;
    main.appendChild(div);
  }
}

function setRandom() {
  return Math.floor(Math.random() * 500);
}
