import renderProjectsToSidebar from "./render-projects-sidebar";
import projectConstructor from "./project-constructor";

export default function createNewProject() {
  const selectNewProjectButton = document.querySelector(".new-project-button");

  selectNewProjectButton.addEventListener("click", function () {
    const newProject = new projectConstructor(); // Create a new project instance

    // Render the project item directly with the project data
    renderProjectsToSidebar(newProject);
  });
}
