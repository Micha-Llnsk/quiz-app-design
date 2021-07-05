const btnCard = document.querySelectorAll(".card-btn");
const answer = document.querySelectorAll(".answers");

for (let i = 0; i < btnCard.length; i++) {
  const currentBtn = btnCard[i];
  const currentAnswer = answer[i];
  currentBtn.addEventListener("click", () => {
    currentAnswer.classList.toggle("hidden");
    if (currentBtn.textContent === "Show Answer") {
      currentBtn.textContent = "Hide Answer";
    } else {
      currentBtn.textContent = "Show Answer";
    }
  });
}

const listOfMarks = document.querySelectorAll(".bookmark");

for (let i = 0; i < listOfMarks.length; i++) {
  const currentMark = listOfMarks[i];
  currentMark.addEventListener("click", () => {
    currentMark.classList.toggle("blackmark");
  });
}
