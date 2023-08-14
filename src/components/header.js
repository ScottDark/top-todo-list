import createTextElement from "../modules/create-textElement";

export default function buildHeader() {
  const selectHeader = document.querySelector("#header");
  let projectName = createTextElement("Default Project Name", "h3");

  selectHeader.appendChild(projectName);
}
