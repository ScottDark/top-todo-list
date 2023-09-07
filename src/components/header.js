import createTextElement from "../modules/create-textElement";
import { getAllProjects } from "../modules/project-manager";

export default function buildHeader() {
  const selectHeader = document.querySelector("#header");

  // Find the latest project (or use default values if there are no projects)
  const projects = getAllProjects();
  const latestProject =
    projects.length > 0 ? projects[projects.length - 1] : null;
  const projectName = latestProject ? latestProject.name : "";

  // Create a paragraph element for the project name
  const projectNameParagraph = document.createElement("p");
  projectNameParagraph.className = "project-name"; // Use the same class name as in the sidebar
  projectNameParagraph.textContent = projectName; // Set the project name text content

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

  selectHeader.appendChild(projectNameParagraph); // Append the paragraph element
  selectHeader.appendChild(projectDateCreated);
  selectHeader.appendChild(projectPrioLevel);

  // Add event listeners to project items in the sidebar
  const projectItems = document.querySelectorAll(".project-item");
  projectItems.forEach((item) => {
    item.addEventListener("click", () => {
      // Get the project name from the clicked item's data attribute
      const projectName = item.getAttribute("data-project-name");

      // Update the paragraph text content with the project name
      projectNameParagraph.textContent = projectName;
    });
  });
}
