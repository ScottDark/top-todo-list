// populate-header-info.js

export function populateHeaderWithProjectDetails(project) {
  // Get the header elements
  const projectNameInput = document.querySelector(".project-name");
  const projectDateCreated = document.querySelector(".project-date-created");
  const projectPrioLevel = document.querySelector(".project-priority");

  // Populate the header elements with project details
  projectNameInput.textContent = project.name;
  projectDateCreated.textContent = `Date Created: ${project.dateCreated}`;
  projectPrioLevel.textContent = `Priority: ${project.priority}`;
}
