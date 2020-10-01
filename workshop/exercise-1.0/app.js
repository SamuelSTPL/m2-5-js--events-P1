let div = document.getElementById("main");
let text = document.createTextNode("Ouch, that hurt!");

function addText() {
  let p = document.createElement("p");
  p.appendChild(text);
  div.appendChild(p);
}

document.body.addEventListener("click", addText);
console.log("exercise-1");
