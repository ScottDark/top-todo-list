import { getAllProjects } from "./project-manager";

export default function deleteProject(deleteButton) {
  deleteButton.addEventListener("click", function () {
    const projects = getAllProjects();
    const projectItem = this.closest(".project-item");

    if (projectItem) {
      const projectNumber = projectItem.getAttribute("data-project-index");

      // Remove the project item from the sidebar
      projectItem.remove();

      // Remove the associated project name div
      const projectNameDiv = document.querySelector(
        `.project-name-${projectNumber}`
      );
      if (projectNameDiv) {
        projectNameDiv.remove();
      }

      // Additional code to remove the project data from the array
      const projectIndex = parseInt(projectNumber);
      if (!isNaN(projectIndex)) {
        if (projectIndex >= 0 && projectIndex < projects.length) {
          // Remove the project data from the array
          projects.splice(projectIndex, 1);
        }
      }
    }
    console.log(projects);
  });
}
