import createTextElement from "./create-textElement";
import getEditableContent from "./get-editablecontent";
import createPriorityDropdown from "./create-priority-dropdown";
import { getAllProjects } from "./project-manager";

let projectCounter = 0;

/* TODO: Align the project name and dropdown menu. */

export default function renderProjectItem() {
  const projects = getAllProjects();
  const latestProject = projects[projects.length - 1];
  let projectContainerClass = `project-item-${projectCounter}`;

  // Project Container
  const selectProjectContainer = document.querySelector(".project-container");
  let newProjectItem = createTextElement("", "div", projectContainerClass);
  selectProjectContainer.appendChild(newProjectItem);

  // Bullet point
  const selectProjectItem = newProjectItem; // Use the newly created project item
  let newBulletPoint = createTextElement("•", "h5", "bullet-point");
  selectProjectItem.appendChild(newBulletPoint);

  // Project Title
  let newProjectEditableTitle = createTextElement(
    latestProject.name,
    "p",
    "project-name"
  );
  newProjectEditableTitle.setAttribute("contenteditable", "true");
  selectProjectItem.appendChild(newProjectEditableTitle);
  getEditableContent("projectNameData", newProjectEditableTitle);

  // Add dropdown prio
  let newDivDropdown = createTextElement("", "div", "dropdown");
  selectProjectItem.appendChild(newDivDropdown);
  const selectDivDropDown = selectProjectItem.querySelector(".dropdown");
  const selectProjectName = selectProjectItem.querySelector(".project-name");
  createPriorityDropdown(selectDivDropDown, selectProjectName);

  projectCounter++;
}
