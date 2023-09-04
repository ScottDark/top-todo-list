import createTextElement from "./create-textElement";
import getEditableContent from "./get-editablecontent";
import createPriorityDropdown from "./create-priority-dropdown";
import { getAllProjects } from "./project-manager";

let projectCounter = 0;

export default function renderProjectItem() {
  const projects = getAllProjects();
  const latestProject = projects[projects.length - 1];
  let projectContainerClass = `project-name-${projectCounter}`;

  // Project Container
  const selectProjectContainer = document.querySelector(".project-container");
  let newProjectItem = createTextElement(
    "",
    "div",
    projectContainerClass,
    "project-item"
  );
  selectProjectContainer.appendChild(newProjectItem);

  // Bullet point
  const selectProjectItem = newProjectItem;
  let newBulletPoint = createTextElement("•", "h5", "bullet-point");
  selectProjectItem.appendChild(newBulletPoint);

  // Project Title
  let newProjectEditableTitle = createTextElement(
    latestProject.name, // Set the default text here
    "input",
    "project-name"
  );
  newProjectEditableTitle.value = latestProject.name; // Set the value attribute

  // Function to update the tooltip text
  function updateTooltip() {
    newProjectEditableTitle.setAttribute(
      "title",
      newProjectEditableTitle.value
    );
  }

  // Attach an event listener to update the tooltip as the input value changes
  newProjectEditableTitle.addEventListener("input", updateTooltip);

  // Initial tooltip setup
  updateTooltip();

  selectProjectItem.appendChild(newProjectEditableTitle);
  getEditableContent("projectNameData", newProjectEditableTitle);

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

  projectCounter++;
}
