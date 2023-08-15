import createTextElement from "../modules/create-textElement";

export default function buildSidebar() {
  const selectSidebar = document.querySelector("#sidebar");
  let createProjectOverviewTitle = createTextElement(
    "Project Overview",
    "h3",
    "project-overview-title"
  );

  let newProject = createTextElement(
    "New Project",
    "button",
    "new-project-button",
    "btn",
    "btn-success"
  );

  let createSortBy = createTextElement(
    "Sort by: Date",
    "button",
    "sort-item-button-projects",
    "btn",
    "btn-primary"
  );

  let projectContainer = createTextElement("", "div", "project-container");

  selectSidebar.appendChild(createProjectOverviewTitle);
  selectSidebar.appendChild(newProject);
  selectSidebar.appendChild(createSortBy);
  selectSidebar.appendChild(projectContainer);
}
