import createTextElement from "../modules/create-textElement";

export default function buildToolbar() {
  const selectToolbar = document.querySelector("#toolbar");
  let createNewItem = createTextElement(
    "New Item",
    "button",
    "create-new-item-button",
    "btn",
    "btn-primary"
  );

  let createSortBy = createTextElement(
    "Sort by: Date Created",
    "button",
    "sort-item-button",
    "btn",
    "btn-primary"
  );

  createSortBy.setAttribute("type", "button");
  createNewItem.setAttribute("type", "button");

  selectToolbar.appendChild(createNewItem);
  selectToolbar.appendChild(createSortBy);
}
