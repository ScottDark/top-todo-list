import createTextElement from "./create-textElement";
import getEditableContent from "./get-editablecontent";
import createPriorityDropdown from "./create-priority-dropdown";
import { getAllProjects } from "./project-manager";
import deleteProject from "./delete-button";

export default function renderProjectItem() {
  const projects = getAllProjects();
  const latestProject = projects[projects.length - 1];

  // Use the project's ID as the data attribute
  const projectContainerClass = `project-name-${latestProject.id}`;

  // Project Container
  const selectProjectContainer = document.querySelector(".project-container");
  const newProjectItem = createTextElement(
    "",
    "div",
    projectContainerClass,
    "project-item"
  );

  newProjectItem.setAttribute("data-project-index", latestProject.id);

  selectProjectContainer.appendChild(newProjectItem);

  // Bullet point
  const selectProjectItem = newProjectItem;
  const newBulletPoint = createTextElement("•", "h5", "bullet-point");
  selectProjectItem.appendChild(newBulletPoint);

  // Project Title
  const newProjectEditableTitle = createTextElement(
    latestProject.name,
    "input",
    "project-name"
  );
  newProjectEditableTitle.value = latestProject.name;

  function updateTooltip() {
    newProjectEditableTitle.title = newProjectEditableTitle.value; // Simplified tooltip update
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
      newProjectEditableTitle.blur(); // This line makes the input lose focus
    }
  });

  // Add dropdown prio
  const newDivDropdown = createTextElement("", "div", "dropdown");
  selectProjectItem.appendChild(newDivDropdown);
  const selectDivDropDown = selectProjectItem.querySelector(".dropdown");
  const selectProjectName = selectProjectItem.querySelector(".project-name");
  createPriorityDropdown(latestProject, selectDivDropDown, selectProjectName);

  // Delete button
  const deleteItem = createTextElement(
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
