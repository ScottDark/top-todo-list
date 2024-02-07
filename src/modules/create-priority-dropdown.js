import createTextElement from "./create-textElement";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function createPriorityDropdown(entity, entityType) {
  // Create the dropdown button
  const createDropdownButton = createTextElement(
    entity.priority, // Set the initial text to entity priority
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
    `${entityType}-priority-dropdown-${entity.id}`
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
          entity.priority = "1";
          break;
        case "2":
          entity.priority = "2";
          break;
        case "3":
          entity.priority = "3";
          break;
        default:
          entity.priority = "*";
          break;
      }

      // Apply the color to the bullet point
      const selectBulletPoint = document.querySelector(
        `.${entityType}-${entity.id} .bullet-point`
      );

      switch (entity.priority) {
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
      createDropdownButton.textContent = entity.priority;
    });
  });

  // Append the dropdown button and menu to the entity container
  const selectDivDropDown = document.querySelector(
    `.${entityType}-${entity.id} .dropdown`
  );
  selectDivDropDown.appendChild(createDropdownButton);
  selectDivDropDown.appendChild(createDropdownMenu);

  return createDropdownButton; // Return the dropdown button element
}
