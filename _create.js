const formElement = document.querySelector(".user__question");
const sendData = [];

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const newQuestion = {
    question: formElement["addquest"].value,
    answer: formElement["addanswer"].value,
    tags: formElement["addtags"].value.split(`,`),
  };

  sendData.push(newQuestion);
  formElement.reset();
  console.log(sendData);
});
