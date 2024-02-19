import createTextElement from "./create-textElement";
import getEditableContent from "./get-editablecontent";
import createPriorityDropdown from "./create-priority-dropdown";
import deleteProject from "./delete-button";
import selectProjectBorder from "./select-project-border";

export default function renderProjectItem(latestProject) {
  // Use the project's ID as the data attribute
  const projectContainerClass = `project-name-${latestProject.id}`;

  // Check if the project has already been rendered
  if (document.querySelector(`.${projectContainerClass}`)) {
    return;
  }

  // Determine the text color based on the project's priority
  let nameColor = "white"; // Default color

  switch (latestProject.priority) {
    case "1":
      nameColor = "red";
      break;
    case "2":
      nameColor = "yellow";
      break;
    case "3":
      nameColor = "green";
      break;
  }

  // Project Container
  const selectProjectContainer = document.querySelector(".project-container");
  const newProjectItem = createTextElement(
    "",
    "div",
    projectContainerClass,
    "project-item"
  );

  newProjectItem.setAttribute("data-project-index", latestProject.id);
  newProjectItem.style.color = nameColor;

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

  // Set the text color for the project name here as well
  newProjectEditableTitle.style.color = nameColor;

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
  createPriorityDropdown(latestProject, "project-name");

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

  newProjectItem.addEventListener("click", () => {
    selectProjectBorder(newProjectItem);
  });

  return newProjectItem; // Return the newly created project item
}
