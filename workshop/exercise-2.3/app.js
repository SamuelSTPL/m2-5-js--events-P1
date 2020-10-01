let allDiv = document.querySelectorAll(".main");

allDiv.forEach((element) => {
  element.addEventListener("click", changeColor);
  function changeColor() {
    element.style.backgroundColor = "green";
  }
  element.style.top = `${setRandom()}px`;
  element.style.left = `${setRandom()}px`;
});

function setRandom() {
  return Math.floor(Math.random() * 900);
}
