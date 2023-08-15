import createTextElement from "../modules/create-textElement";
import createProjectItem from "../modules/create-project-item";

export default function buildSidebar() {
  const selectSidebar = document.querySelector("#sidebar");
  let createProjectOverviewTitle = createTextElement(
    "Project Overview",
    "h3",
    "project-overview-title"
  );

  let newProjectButton = createTextElement(
    "New Project",
    "button",
    "new-project-button",
    "btn",
    "btn-success"
  );

  let newHorizontalRule = createTextElement("", "hr", "page-break");

  let createSortButton = createTextElement(
    "Sort by: Date",
    "button",
    "sort-item-button-projects",
    "btn",
    "btn-primary"
  );

  let projectContainer = createTextElement("", "div", "project-container");

  selectSidebar.appendChild(createProjectOverviewTitle);
  selectSidebar.appendChild(newHorizontalRule);
  selectSidebar.appendChild(newProjectButton);
  selectSidebar.appendChild(createSortButton);
  selectSidebar.appendChild(projectContainer);

  createProjectItem();
}
