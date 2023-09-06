import { getAllProjects, removeProjectById } from "./project-manager";

export default function deleteProject(deleteButton) {
  deleteButton.addEventListener("click", function () {
    const projectItem = this.closest(".project-item");

    if (projectItem) {
      const projectId = parseInt(
        projectItem.getAttribute("data-project-index")
      );

      // Remove the project item from the sidebar
      projectItem.remove();

      // Remove the associated project object from the array
      removeProjectById(projectId);
      console.log(getAllProjects());
    }
  });
}
