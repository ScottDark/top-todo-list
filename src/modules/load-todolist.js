import { getAllProjects } from "./project-manager";
import renderToDoListItems from "./render-to-do-list-items";

export default function loadTodolist() {
  const selectMain = document.querySelector("#main");

  // Clear the main container
  selectMain.innerHTML = "";

  const allProjects = getAllProjects();

  const selectedProject = document.querySelector(".selected-project");
  const selectedProjectId = selectedProject.getAttribute("data-project-index");
  const selectedProjectItems = allProjects[selectedProjectId].todoList;

  // Check if there are any items in the selected project
  if (selectedProjectItems.length === 0) {
    return;
  }

  // Render the items
  selectedProjectItems.forEach((item) => {
    renderToDoListItems(item);
  });
}
