let win = document.createTextNode("You Win!");
let loose = document.createTextNode("You Loose");
let p = document.getElementById("result");
let isWin = false;

setTimeout(function () {
  if (isWin === true) {
    p.appendChild(win);
  } else {
    p.appendChild(loose);
  }
}, 1000);

document.body.addEventListener("click", switchToTrue);
function switchToTrue() {
  isWin = true;
}

console.log("exercise 1.1");
