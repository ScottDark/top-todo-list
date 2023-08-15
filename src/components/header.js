import createTextElement from "../modules/create-textElement";
import getEditableContent from "../modules/get-editablecontent";

export default function buildHeader() {
  const selectHeader = document.querySelector("#header");

  let projectNameElement = createTextElement("Project Name", "h3");
  projectNameElement.setAttribute("contenteditable", "true");

  getEditableContent("projectNameData", projectNameElement);

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

  selectHeader.appendChild(projectNameElement);
  selectHeader.appendChild(projectDateCreated);
  selectHeader.appendChild(projectPrioLevel);
}
