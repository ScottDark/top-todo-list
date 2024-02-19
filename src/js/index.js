import "../scss/styles.scss";
import buildHeader from "../components/header";
import buildToolbar from "../components/toolbar";
import buildSidebar from "../components/sidebar";
import createToDoListItem from "../modules/create-to-do-list-item";
import loadProjectsFromLocalStorage from "../modules/load-projects.js";
import { addProject } from "../modules/project-manager";
import renderProjectItem from "../modules/render-projects-sidebar";
import "../modules/save-projects.js";

function buildPage() {
  buildHeader();
  buildToolbar();
  buildSidebar();
  createToDoListItem();

  // Load projects from local storage when the page is loaded
  window.addEventListener("load", () => {
    const loadedProjects = loadProjectsFromLocalStorage();
    loadedProjects.forEach((project) => {
      addProject(project);

      // Render each project to the sidebar
      loadedProjects.forEach((project) => {
        renderProjectItem(project);
      });
    });
  });

  // Get the elements
  const mainElement = document.querySelector("#main");
  const headerElement = document.querySelector("#header");
  const footerElement = document.querySelector("#footer");
  const sidebarElement = document.querySelector("#sidebar");
  const toolbarElement = document.querySelector("#toolbar");

  // Calculate the height of the other elements
  const otherElementsHeight =
    headerElement.offsetHeight +
    footerElement.offsetHeight +
    sidebarElement.offsetHeight +
    toolbarElement.offsetHeight;

  // Set the max-height of the #main element
  mainElement.style.maxHeight = `calc(100vh - ${otherElementsHeight}px)`;
}

buildPage();
