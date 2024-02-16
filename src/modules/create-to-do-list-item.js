import itemConstructor from "./item-constructor";
import renderToDoListItems from "./render-to-do-list-items";
import { getAllProjects } from "./project-manager";

export default function createToDoListItem() {
  const selectCreateNewItemButton = document.querySelector(
    ".create-new-item-button"
  );

  selectCreateNewItemButton.addEventListener("click", function () {
    const newItem = new itemConstructor();

    // Get the currently selected project element
    const selectedProjectElement = document.querySelector(".selected-project");

    // Get the project's id from the data attribute
    const projectId = selectedProjectElement.getAttribute("data-project-index");

    const project = getAllProjects()[projectId];
    if (project) {
      project.addTodoItem(newItem);
    } else {
      console.error(`Project with id ${projectId} not found`);
    }

    renderToDoListItems(newItem);
  });
}
