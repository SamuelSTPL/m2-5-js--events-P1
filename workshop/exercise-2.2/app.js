let allDiv = document.querySelectorAll(".main");

allDiv.forEach((element) => {
  element.addEventListener("click", changeColor);
  function changeColor() {
    if (element.style.backgroundColor === "green") {
      element.style.backgroundColor = "red";
    } else {
      element.style.backgroundColor = "green";
    }
  }
});
