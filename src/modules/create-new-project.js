import renderProjectsToSidebar from "./render-projects-sidebar";
import projectConstructor from "./project-constructor";
import HeaderManager from "./header-manager";

export default function createNewProject() {
  const selectNewProjectButton = document.querySelector(".new-project-button");

  selectNewProjectButton.addEventListener("click", function () {
    const newProject = new projectConstructor(); // Create a new project instance

    // Render the new project to the sidebar
    const newProjectElement = renderProjectsToSidebar(newProject);

    const headerManager = new HeaderManager();

    newProjectElement.addEventListener("click", () => {
      headerManager.populateHeaderWithProjectDetails(newProject);
    });
  });
}
