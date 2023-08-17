import renderProjectsToSidebar from "./render-projects-sidebar";
import projectConstructor from "./project-constructor";

export default function createNewProject() {
  const selectNewProjectButton = document.querySelector(".new-project-button");

  selectNewProjectButton.addEventListener("click", function () {
    new projectConstructor();

    renderProjectsToSidebar();
  });
}
