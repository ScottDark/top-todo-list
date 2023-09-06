import createTextElement from "./create-textElement";
import getEditableContent from "./get-editablecontent";
import createPriorityDropdown from "./create-priority-dropdown";
import { getAllProjects } from "./project-manager";
import deleteProject from "./delete-button";

export default function renderProjectItem() {
  const projects = getAllProjects();
  const latestProject = projects[projects.length - 1];

  // Use the project's ID as the data attribute
  let projectContainerClass = `project-name-${latestProject.id}`;
  // Project Container
  const selectProjectContainer = document.querySelector(".project-container");
  let newProjectItem = createTextElement(
    "",
    "div",
    projectContainerClass,
    "project-item"
  );

  newProjectItem.setAttribute("data-project-index", latestProject.id); // Use the project's ID
  selectProjectContainer.appendChild(newProjectItem);

  // Bullet point
  const selectProjectItem = newProjectItem;
  let newBulletPoint = createTextElement("•", "h5", "bullet-point");
  selectProjectItem.appendChild(newBulletPoint);

  // Project Title
  let newProjectEditableTitle = createTextElement(
    latestProject.name,
    "input",
    "project-name"
  );
  newProjectEditableTitle.value = latestProject.name;

  // Function to update the tooltip text
  function updateTooltip() {
    newProjectEditableTitle.setAttribute(
      "title",
      newProjectEditableTitle.value
    );
  }

  newProjectEditableTitle.addEventListener("input", updateTooltip);
  updateTooltip();

  selectProjectItem.appendChild(newProjectEditableTitle);

  getEditableContent(latestProject, newProjectEditableTitle);

  // Prevent Enter key from creating a new line and make the input lose focus
  newProjectEditableTitle.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      latestProject.name = newProjectEditableTitle.value;
      // Optionally, you can call a function to save the project name to your data store here.
      newProjectEditableTitle.blur(); // This line makes the input lose focus
    }
  });

  // Prevent Enter key from creating a new line
  newProjectEditableTitle.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  });

  // Add dropdown prio
  let newDivDropdown = createTextElement("", "div", "dropdown");
  selectProjectItem.appendChild(newDivDropdown);
  const selectDivDropDown = selectProjectItem.querySelector(".dropdown");
  const selectProjectName = selectProjectItem.querySelector(".project-name");
  createPriorityDropdown(selectDivDropDown, selectProjectName);

  // Delete button
  let deleteItem = createTextElement(
    "X",
    "button",
    "delete-item",
    "btn",
    "btn-danger"
  );

  selectProjectItem.appendChild(deleteItem);
  deleteProject(deleteItem);

  return newProjectItem; // Return the newly created project item
}
