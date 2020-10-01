let win = document.createTextNode("You Win!");
let loose = document.createTextNode("You Loose");
let p = document.getElementById("result");
let isWin = false;
let timeSpan = document.getElementById("time");

let random = function () {
  return Math.floor(Math.random() * 5 + 1);
};
let timeLeft = random();
timeSpan.innerText = timeLeft;

console.log(timeLeft);

const timerDown = setInterval(() => {
  timeLeft--;
  timeSpan.innerText = timeLeft;
  if (timeLeft <= 0) {
    timeLeft = 0;
    if (!isWin) {
      p.appendChild(loose);
    }
    clearInterval(timerDown);
  }
}, 1000);

document.body.addEventListener("click", switchToTrue);
function switchToTrue() {
  isWin = true;
  if (timeLeft > 0) {
    p.appendChild(win);
  }
}
