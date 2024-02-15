import toggleNewItemButton from "./toggle-new-item-button";

class HeaderManager {
  constructor() {
    this.shouldPopulate = true;
  }

  toggleNewItemButton() {
    const button = document.querySelector(".create-new-item-button");
    button.disabled = !this.isHeaderPopulated;
  }

  populateHeaderWithProjectDetails(project) {
    if (!this.shouldPopulate) return;

    const projectNameInput = document.querySelector(".project-name");
    const projectDateCreated = document.querySelector(".project-date-created");
    const projectPrioLevel = document.querySelector(".project-priority");

    projectNameInput.textContent = project.name;
    projectDateCreated.textContent = `Date Created: ${project.dateCreated}`;
    projectPrioLevel.textContent = `Priority: ${project.priority}`;

    toggleNewItemButton(true);
  }

  resetHeader() {
    this.shouldPopulate = false;

    const projectNameInput = document.querySelector(".project-name");
    const projectDateCreated = document.querySelector(".project-date-created");
    const projectPrioLevel = document.querySelector(".project-priority");

    projectNameInput.innerHTML = "";
    projectDateCreated.innerHTML = "Date Created: N/A";
    projectPrioLevel.innerHTML = "Priority: N/A";

    toggleNewItemButton(false);
  }
}

export default HeaderManager;
