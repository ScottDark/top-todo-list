import renderProjectsToSidebar from "./render-projects-sidebar";
import projectConstructor from "./project-constructor";
import { getAllProjects } from "./project-manager";

export default function createNewProject() {
  const selectNewProjectButton = document.querySelector(".new-project-button");

  selectNewProjectButton.addEventListener("click", function () {
    new projectConstructor();

    renderProjectsToSidebar(getAllProjects());
  });
}
