import createTextElement from "../modules/create-textElement";
import sortButton from "../modules/sort-button";
import { getAllProjects } from "../modules/project-manager";

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

  createNewItem.setAttribute("type", "button");
  createNewItem.disabled = true;

  selectToolbar.appendChild(createNewItem);
  selectToolbar.appendChild(createSortBy);

  const selectSortButton = document.querySelector(".sort-item-button");

  selectSortButton.addEventListener("click", function () {
    // Get the currently selected project element
    const selectedProjectElement = document.querySelector(".selected-project");

    if (!selectedProjectElement) {
      console.error("No project is selected");
      return;
    } else {
      // Get the project's id from the data attribute
      const projectId =
        selectedProjectElement.getAttribute("data-project-index");

      const project = getAllProjects()[projectId];

      sortButton(selectSortButton, project.todoList);
    }
  });
}
