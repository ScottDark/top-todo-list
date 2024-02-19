import "../scss/styles.scss";
import buildHeader from "../components/header";
import buildToolbar from "../components/toolbar";
import buildSidebar from "../components/sidebar";
import createToDoListItem from "../modules/create-to-do-list-item";
import loadProjectsFromLocalStorage from "../modules/load-projects";

function buildPage() {
  buildHeader();
  buildToolbar();
  buildSidebar();
  createToDoListItem();
  loadProjectsFromLocalStorage();

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
