import itemConstructor from "./item-constructor";
import renderToDoListItems from "./render-to-do-list-items";
import { getAllProjects, notifyObservers } from "./project-manager";

export default function createToDoListItem() {
  const selectCreateNewItemButton = document.querySelector(
    ".create-new-item-button"
  );

  selectCreateNewItemButton.addEventListener("click", function () {
    const newItem = new itemConstructor();

    // Get the currently selected project element
    const selectedProjectElement = document.querySelector(".selected-project");

    // Get the project's id from the data attribute and convert it to a number
    const projectId = Number(
      selectedProjectElement.getAttribute("data-project-index")
    );

    const project = getAllProjects()[projectId];
    if (!project) {
      console.error(`Project with id ${projectId} not found`);
    } else if (typeof project.addTodoItem !== "function") {
      console.error(`addTodoItem is not a function on the project object`);
    } else {
      project.addTodoItem(newItem);
    }

    renderToDoListItems(newItem);
    notifyObservers();
  });
}
