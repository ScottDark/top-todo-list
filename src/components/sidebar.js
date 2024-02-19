import createTextElement from "../modules/create-textElement";
import createNewProjectButton from "../modules/create-new-project";
import sortButton from "../modules/sort-button";
import { getAllProjects } from "../modules/project-manager";

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
    "Sort by: Name",
    "button",
    "sort-button-projects",
    "btn",
    "btn-primary"
  );

  let projectContainer = createTextElement("", "div", "project-container");

  selectSidebar.appendChild(createProjectOverviewTitle);
  selectSidebar.appendChild(newHorizontalRule);
  selectSidebar.appendChild(newProjectButton);
  selectSidebar.appendChild(createSortButton);
  selectSidebar.appendChild(projectContainer);

  const selectSortButton = document.querySelector(".sort-button-projects");
  const projects = getAllProjects();

  selectSortButton.addEventListener("click", function () {
    sortButton(selectSortButton, projects);
  });

  createNewProjectButton();
}
