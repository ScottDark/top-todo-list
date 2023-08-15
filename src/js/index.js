import "../scss/styles.scss";
import buildHeader from "../components/header";
import buildToolbar from "../components/toolbar";
import buildSidebar from "../components/sidebar";

function buildPage() {
  buildHeader();
  buildToolbar();
  buildSidebar();
}

buildPage();
