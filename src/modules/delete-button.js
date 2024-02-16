import { removeProjectById } from "./project-manager";
import HeaderManager from "./header-manager";

export default function deleteProject(deleteButton) {
  deleteButton.addEventListener("click", function (event) {
    event.stopPropagation();

    const projectItem = this.closest(".project-item");
    const toDoListItem = this.closest(".item");

    if (projectItem) {
      const projectId = parseInt(
        projectItem.getAttribute("data-project-index")
      );
      // Remove the project item from the sidebar
      projectItem.remove();
      // Remove the associated project object from the array
      removeProjectById(projectId);

      const headerManager = new HeaderManager();
      headerManager.resetHeader();

      // Clear the #main of all todo list items
      const mainElement = document.querySelector("#main");
      mainElement.innerHTML = "";
    } else if (toDoListItem) {
      const itemId = parseInt(toDoListItem.getAttribute("data-item-index"));
      // Remove the todo list item
      toDoListItem.remove();
      // Here you should also remove the todo list item from the project's todo list
      // removeTodoItemById(itemId);
    }
  });
}
