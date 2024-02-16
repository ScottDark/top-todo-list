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

      // Remove the selected class from all project items
      const projectItems = document.querySelectorAll(".project-item");
      projectItems.forEach((item) => {
        item.classList.remove("selected-project", "border-primary", "rounded");
      });

      // Add the selected class to the clicked project item
      newProjectElement.classList.add(
        "selected-project",
        "border-primary",
        "rounded"
      );

      newProjectElement.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          headerManager.populateHeaderWithProjectDetails(newProject);
        }
      });
    });
  });
}
