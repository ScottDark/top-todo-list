import renderProjectsToSidebar from "./render-projects-sidebar";

export default function createNewProject() {
  const selectNewProjectButton = document.querySelector(".new-project-button");

  selectNewProjectButton.addEventListener("click", function () {
    renderProjectsToSidebar();
  });
}
