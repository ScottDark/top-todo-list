import createTextElement from "./create-textElement";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

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

  selectDivDropDown.appendChild(createDropdownButton);

  let createDropdownMenu = createTextElement("", "ul", "dropdown-menu");
  selectDivDropDown.appendChild(createDropdownMenu);

  const menuItem = ["1", "2", "3", "*"];
  menuItem.forEach((prio) => {
    const listItem = document.createElement("li");
    const anchor = document.createElement("a");
    anchor.className = "dropdown-item";
    anchor.href = "#";
    anchor.textContent = prio;
    listItem.appendChild(anchor);
    createDropdownMenu.appendChild(listItem);
  });
}
