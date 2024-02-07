import createTextElement from "./create-textElement";
import getEditableContent from "./get-editablecontent";
import createPriorityDropdown from "./create-priority-dropdown";
import deleteProject from "./delete-button";

export default function renderToDoListItems(latestItem) {
  // Use the item's ID as the data attribute
  const itemContainerClass = `item-name-${latestItem.id}`;

  // Determine the text color based on the item's priority
  let nameColor = "white"; // Default color

  switch (latestItem.priority) {
    case "1":
      nameColor = "red";
      break;
    case "2":
      nameColor = "yellow";
      break;
    case "3":
      nameColor = "green";
      break;
  }

  // Item Container
  const selectMain = document.querySelector("#main");
  const newItem = createTextElement("", "div", itemContainerClass, "item");

  newItem.setAttribute("data-item-index", latestItem.id);

  // Set the text color for the item name here
  newItem.style.color = nameColor;

  selectMain.appendChild(newItem);

  // Item Title
  const newItemEditableTitle = createTextElement(
    latestItem.name,
    "input",
    "item-name"
  );
  newItemEditableTitle.value = latestItem.name;

  function updateTooltip() {
    newItemEditableTitle.title = newItemEditableTitle.value; // Simplified tooltip update
  }

  newItemEditableTitle.addEventListener("input", updateTooltip);
  updateTooltip();

  // Set the text color for the item name here as well
  newItemEditableTitle.style.color = nameColor;

  newItem.appendChild(newItemEditableTitle);

  getEditableContent(latestItem, newItemEditableTitle);

  // Prevent Enter key from creating a new line and make the input lose focus
  newItemEditableTitle.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      latestItem.name = newItemEditableTitle.value;
      newItemEditableTitle.blur(); // This line makes the input lose focus
    }
  });

  // Add dropdown prio
  const newDivDropdown = createTextElement("", "div", "dropdown");
  newItem.appendChild(newDivDropdown);

  // Now that the elements have been appended to newItem, you can select them
  const selectDivDropDown = newItem.querySelector(".dropdown");
  const selectItemName = newItem.querySelector(".item-name");
  createPriorityDropdown(latestItem, "item");

  // Delete button
  const deleteItem = createTextElement(
    "X",
    "button",
    "delete-item",
    "btn",
    "btn-danger"
  );

  newItem.appendChild(deleteItem);
  deleteProject(deleteItem);
}
