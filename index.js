import { createCardComponent } from "./lib/card.js";
import { data } from "./lib/db.js";

// Render cards coming from data
const cardComponents = [];
data.forEach((cardData) => {
  const component = createCardComponent(cardData);
  cardComponents.push(component);
});

// Append them to the content element
const contentClass = document.querySelector(".content");
cardComponents.forEach((component) => {
  contentClass.append(component);
});
