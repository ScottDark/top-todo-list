import { removeProjectById } from "./project-manager";
import HeaderManager from "./header-manager";

export default function deleteProject(deleteButton) {
  deleteButton.addEventListener("click", function () {
    const projectItem = this.closest(".project-item");

    const projectId = parseInt(projectItem.getAttribute("data-project-index"));

    // Remove the project item from the sidebar
    projectItem.remove();

    // Remove the associated project object from the array
    removeProjectById(projectId);

    const headerManager = new HeaderManager();
    headerManager.resetHeader();
    headerManager.enablePopulation();
  });
}
