export function createCardComponent(cardData) {
  const section = createSection();

  const bookmark = createBookmark(cardData);

  const question = createQuestion(cardData);

  const answer = createAnswer(cardData);

  const button = createButton(answer);

  const tagList = createTagList(cardData);

  section.append(bookmark);
  section.append(question);
  section.append(answer);
  section.append(button);
  section.append(tagList);

  return section;
}

function createSection() {
  const section = document.createElement("section");
  section.classList.add("planets");
  return section;
}

function createBookmark(cardData) {
  const bookmark = document.createElement("img");
  bookmark.classList.add("bookmark");
  bookmark.src = "icons/bookmark.png";
  bookmark.addEventListener("click", () => {
    bookmark.classList.toggle("blackmark");
  });
  if (cardData.isBookmarked) {
    bookmark.classList.add("blackmark");
  }
  return bookmark;
}

function createQuestion(cardData) {
  const question = document.createElement("h2");
  question.textContent = cardData.question;
  return question;
}

function createAnswer(cardData) {
  const answer = document.createElement("p");
  answer.classList.add("answer");
  answer.classList.add("hidden");
  answer.textContent = cardData.answer;
  return answer;
}

function createButton(answer) {
  const button = document.createElement("button");
  button.classList.add("card-btn");
  button.classList.add("btn");
  button.textContent = "Show Answer";
  button.addEventListener("click", () => {
    answer.classList.toggle("hidden");
    if (button.textContent === "Show Answer") {
      button.textContent = "Hide Answer";
    } else {
      button.textContent = "Show Answer";
    }
  });
  return button;
}

function createTagList(cardData) {
  const tagList = document.createElement("ul");
  tagList.classList.add("topics");

  const tagElement = cardData.tags.map((tagInput) => {
    const liEle = document.createElement("li");
    liEle.textContent = tagInput;
    return liEle;
  });

  tagElement.forEach((tagElement) => {
    tagList.append(tagElement);
  });

  return tagList;
}
/*
      <section class="planets">
        <img class="bookmark" src="icons/bookmark.png" alt="" />
        <h2>Question</h2>
        <p class="answers hidden">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
          dolores at, ad quis labore earum autem iure? Recusandae voluptate
          beatae sed aspernatur nam eaque, rem cumque dignissimos eligendi
          inventore optio!
        </p>
        <button class="card-btn">Show Answer</button>
        <ul class="topics">
          <li>#geo</li>
          <li>#history</li>
          <li>#math</li>
          <li>#culture</li>
        </ul>
      </section>
*/
