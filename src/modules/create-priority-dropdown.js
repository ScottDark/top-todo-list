import createTextElement from "./create-textElement";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function createPriorityDropdown(
  selectDivDropDown,
  selectProjectName
) {
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
  createDropdownButton.setAttribute("id", "project-priority-dropdown");

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

    anchor.addEventListener("click", function () {
      const selectedPrio = anchor.textContent;
      createDropdownButton.textContent = selectedPrio;

      // Change project name colour based on priority.
      switch (selectedPrio) {
        case "1":
          selectProjectName.style.color = "red";
          break;
        case "2":
          selectProjectName.style.color = "yellow";
          break;
        case "3":
          selectProjectName.style.color = "green";
          break;
        default:
          selectProjectName.style.color = "white";
          break;
      }
    });
  });
}
