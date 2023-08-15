import createTextElement from "./create-textElement";

export default function createPriorityDropdown(selectDivDropDown) {
  let createDropdownButton = createTextElement(
    "*",
    "button",
    "btn",
    "btn-info",
    "btn-sm",
    "dropdown-toggle"
  );

  createDropdownButton.setAttribute("type", "button");
  createDropdownButton.setAttribute("data-bs-toggle", "dropdown");
  createDropdownButton.setAttribute("aria-expanded", "false");

  let createDropdownItems = createTextElement("", "ul");

  selectDivDropDown.appendChild(createDropdownButton);
}
