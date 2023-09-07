import createTextElement from "../modules/create-textElement";
import { getAllProjects } from "../modules/project-manager";

export default function buildHeader() {
  const selectHeader = document.querySelector("#header");

  // Find the latest project (or use default values if there are no projects)
  const projects = getAllProjects();
  const latestProject =
    projects.length > 0 ? projects[projects.length - 1] : null;
  const projectName = latestProject ? latestProject.name : "";

  // Create an input element for the project name
  const projectNameInput = document.createElement("input");
  projectNameInput.type = "text";
  projectNameInput.value = projectName;
  projectNameInput.className = "project-name"; // Use the same class name as in the sidebar

  // Event listener to update the project name
  projectNameInput.addEventListener("input", function () {
    if (latestProject) {
      latestProject.name = this.value;
    }
  });

  // Create date and priority elements
  const dateCreated = latestProject ? latestProject.dateCreated : "N/A";
  const priority = latestProject ? latestProject.priority : "N/A";

  const projectDateCreated = createTextElement(
    `Date Created: ${dateCreated}`,
    "div",
    "project-date-created"
  );

  const projectPrioLevel = createTextElement(
    `Priority: ${priority}`,
    "div",
    "project-priority"
  );

  selectHeader.appendChild(projectNameInput);
  selectHeader.appendChild(projectDateCreated);
  selectHeader.appendChild(projectPrioLevel);
}
