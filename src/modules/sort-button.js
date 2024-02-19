import renderProjectItem from "./render-projects-sidebar";
import renderToDoListItems from "./render-to-do-list-items";

let sortOption = 0; // 0: Sort by name, 1: Sort by date, 2: Sort by priority

export default function sortButton(selectSortButton, array) {
  const sortOptions = [
    { label: "Sort by: Name", compare: (a, b) => a.name.localeCompare(b.name) },
    {
      label: "Sort by: Date",
      compare: (a, b) => new Date(a.dateCreated) - new Date(b.dateCreated),
    },
    {
      label: "Sort by: Prio",
      compare: (a, b) => {
        if (a.priority === "*" && b.priority !== "*") {
          return 1; // a is sorted to the bottom
        } else if (b.priority === "*" && a.priority !== "*") {
          return -1; // b is sorted to the bottom
        } else {
          return a.priority.localeCompare(b.priority); // Otherwise, sort alphabetically
        }
      },
    },
  ];

  selectSortButton.textContent = sortOptions[sortOption].label; // Set initial button text

  sortOption = (sortOption + 1) % sortOptions.length;

  // Sort the array based on the selected option
  array.sort(sortOptions[sortOption].compare);

  selectSortButton.textContent = sortOptions[sortOption].label; // Change button text

  const currentlySelectedProject = document.querySelector(".selected-project");

  if (
    currentlySelectedProject === null ||
    currentlySelectedProject === undefined
  ) {
    console.log("No project is selected");
  } else {
    if (selectSortButton.classList.contains("sort-button-projects")) {
      const currentlySelectedProjectID =
        currentlySelectedProject.getAttribute("data-project-index");

      // Clear the sidebar
      const selectProjectContainer =
        document.querySelector(".project-container");
      selectProjectContainer.innerHTML = "";

      // Re-render the sorted projects using the provided renderProjectItem function
      for (const project of array) {
        const newProjectArray = renderProjectItem(project); // Pass the project data to the function

        // Set the text color for the project name here
        const selectProjectName =
          newProjectArray.querySelector(".project-name");
        selectProjectName.style.color = "white"; // This ensures the project name color remains white
      }

      const selectPreviouslySelectedProject = document.querySelector(
        `[data-project-index="${currentlySelectedProjectID}"]`
      );

      // Add the selected class to the previously selected project
      selectPreviouslySelectedProject.classList.add(
        "selected-project",
        "border-primary",
        "rounded"
      );
    } else {
      // Clear the to-do list
      const selectToDoList = document.querySelector("#main");
      selectToDoList.innerHTML = "";

      // Re-render the sorted to-do list items
      for (const item of array) {
        const newItemArray = renderToDoListItems(item);

        // Set the text color for the project name here
        const selectItemName = newItemArray.querySelector(".item-name");
        selectItemName.style.color = "white"; // This ensures the project name color remains white
      }
    }
  }
}
