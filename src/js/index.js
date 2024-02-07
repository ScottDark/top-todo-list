import "../scss/styles.scss";
import buildHeader from "../components/header";
import buildToolbar from "../components/toolbar";
import buildSidebar from "../components/sidebar";
import createToDoListItem from "../modules/create-to-do-list-item";

function buildPage() {
  buildHeader();
  buildToolbar();
  buildSidebar();
  createToDoListItem();
}

buildPage();
