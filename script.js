const h1Element = document.getElementById("red");
const h2ElementEvent = document.getElementById("clickeable");
const h2ElementColor = document.getElementById("orange");

h1Element.textContent = "Adios";

h2ElementColor.style.color = "orange";

h2ElementEvent.addEventListener("click", (event) => {
  h2ElementEvent.style.color = "brown";
});
