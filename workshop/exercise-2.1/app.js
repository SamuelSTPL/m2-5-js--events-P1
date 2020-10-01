let allDiv = document.querySelectorAll(".main");

// console.log(allDiv);

allDiv.forEach((element) => {
  element.addEventListener("click", changeColor);
  function changeColor() {
    element.style.backgroundColor = "green";
  }
});
