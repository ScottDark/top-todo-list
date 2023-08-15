import createTextElement from "./create-textElement";
import getEditableContent from "./get-editablecontent";

export default function createProjectItem() {
  // Project Container
  const selectProjectContainer = document.querySelector(".project-container");
  let newProjectItem = createTextElement("", "div", "project-item");
  selectProjectContainer.appendChild(newProjectItem);

  // Bullet point
  const selectProjectItem = document.querySelector(".project-item");
  let newBulletPoint = createTextElement("•", "h5", "bullet-point");
  selectProjectItem.appendChild(newBulletPoint);

  // Project Title
  let newProjectEditableTitle = createTextElement(
    "Project Name",
    "p",
    "project-name"
  );
  newProjectEditableTitle.setAttribute("contenteditable", "true");
  selectProjectItem.appendChild(newProjectEditableTitle);

  getEditableContent("projectNameData", newProjectEditableTitle);
}
