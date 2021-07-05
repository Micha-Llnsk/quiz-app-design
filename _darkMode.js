const themeButton = document.querySelector(".theme_btn");
const bodyElement = document.querySelector(".body");

themeButton.addEventListener("click", () => {
  if (themeButton.textContent === "Dark-Mode") {
    themeButton.textContent = "Light-Mode";
  } else {
    themeButton.textContent = "Dark-Mode";
  }
  bodyElement.classList.toggle("rainbow_theme");
});
