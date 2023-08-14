import createTextElement from "../modules/create-textElement";

export default function buildHeader() {
  const selectHeader = document.querySelector("#header");
  selectHeader.appendChild(createTextElement("Project Overview", "h5", "test"));
}
