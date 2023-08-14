import createTextElement from "../modules/create-textElement";
import saveEditableContent from "../modules/save-editablecontent";

export default function buildHeader() {
  const selectHeader = document.querySelector("#header");

  let projectName = createTextElement("Project Name", "h3");
  projectName.setAttribute("contenteditable", "true");

  let userEnteredProjectName = saveEditableContent(projectName);

  // Create date and prio text.
  let projectDateCreated = createTextElement(
    "Date Created: ",
    "div",
    "project-date-created"
  );

  let projectPrioLevel = createTextElement(
    "Priority:  ",
    "div",
    "project-priority"
  );

  selectHeader.appendChild(projectName);
  selectHeader.appendChild(projectDateCreated);
  selectHeader.appendChild(projectPrioLevel);
}
