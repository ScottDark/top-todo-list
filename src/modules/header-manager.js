class HeaderManager {
  constructor() {
    this.shouldPopulate = true;
  }

  enablePopulation() {
    this.shouldPopulate = true;
  }

  disablePopulation() {
    this.shouldPopulate = false;
  }

  populateHeaderWithProjectDetails(project) {
    if (!this.shouldPopulate) return;

    const projectNameInput = document.querySelector(".project-name");
    const projectDateCreated = document.querySelector(".project-date-created");
    const projectPrioLevel = document.querySelector(".project-priority");

    projectNameInput.textContent = project.name;
    projectDateCreated.textContent = `Date Created: ${project.dateCreated}`;
    projectPrioLevel.textContent = `Priority: ${project.priority}`;
  }

  resetHeader() {
    this.shouldPopulate = false;

    const projectNameInput = document.querySelector(".project-name");
    const projectDateCreated = document.querySelector(".project-date-created");
    const projectPrioLevel = document.querySelector(".project-priority");

    projectNameInput.innerHTML = "";
    projectDateCreated.innerHTML = "Date Created: N/A";
    projectPrioLevel.innerHTML = "Priority: N/A";
  }
}

export default HeaderManager;
