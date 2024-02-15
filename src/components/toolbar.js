import createTextElement from "../modules/create-textElement";

export default function buildToolbar() {
  const selectToolbar = document.querySelector("#toolbar");
  let createNewItem = createTextElement(
    "New Item",
    "button",
    "create-new-item-button",
    "btn",
    "btn-success"
  );

  let createSortBy = createTextElement(
    "Sort by: Date",
    "button",
    "sort-item-button",
    "btn",
    "btn-primary"
  );

  createSortBy.setAttribute("type", "button");
  createNewItem.setAttribute("type", "button");
  createNewItem.disabled = true;

  selectToolbar.appendChild(createNewItem);
  selectToolbar.appendChild(createSortBy);
}
