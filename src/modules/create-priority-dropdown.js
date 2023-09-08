import createTextElement from "./create-textElement";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function createPriorityDropdown(project) {
  // Create the dropdown button
  const createDropdownButton = createTextElement(
    project.priority, // Set the initial text to project priority
    "button",
    "btn",
    "btn-info",
    "btn-sm",
    "dropdown-toggle"
  );

  createDropdownButton.setAttribute("type", "button");
  createDropdownButton.setAttribute("data-bs-toggle", "dropdown");
  createDropdownButton.setAttribute("aria-expanded", "false");
  createDropdownButton.setAttribute(
    "id",
    `project-priority-dropdown-${project.id}`
  );

  // Create the dropdown menu
  const createDropdownMenu = document.createElement("ul");
  createDropdownMenu.className = "dropdown-menu";

  // Define the priority options
  const priorities = ["1", "2", "3", "*"];

  // Create menu items for each priority option and handle click event
  priorities.forEach((prio) => {
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

      // Change the bullet point color based on priority.
      switch (selectedPrio) {
        case "1":
          project.priority = "1";
          break;
        case "2":
          project.priority = "2";
          break;
        case "3":
          project.priority = "3";
          break;
        default:
          project.priority = "*";
          break;
      }

      // Apply the color to the bullet point
      const selectBulletPoint = document.querySelector(
        `.project-name-${project.id} .bullet-point`
      );

      switch (project.priority) {
        case "1":
          selectBulletPoint.style.color = "red";
          break;
        case "2":
          selectBulletPoint.style.color = "yellow";
          break;
        case "3":
          selectBulletPoint.style.color = "green";
          break;
        default:
          selectBulletPoint.style.color = "white";
          break;
      }

      // Update the dropdown button text to the selected priority
      createDropdownButton.textContent = project.priority;
    });
  });

  // Append the dropdown button and menu to the project container
  const selectDivDropDown = document.querySelector(
    `.project-name-${project.id} .dropdown`
  );
  selectDivDropDown.appendChild(createDropdownButton);
  selectDivDropDown.appendChild(createDropdownMenu);

  return createDropdownButton; // Return the dropdown button element
}
