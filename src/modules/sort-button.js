import renderProjectItem from "./render-projects-sidebar";

export default function sortButton(selectSortButton, projects) {
  let sortOption = 0; // 0: Sort by name, 1: Sort by date, 2: Sort by priority

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

  selectSortButton.addEventListener("click", function () {
    sortOption = (sortOption + 1) % sortOptions.length;

    // Sort the projects array based on the selected option
    projects.sort(sortOptions[sortOption].compare);

    selectSortButton.textContent = sortOptions[sortOption].label; // Change button text

    // Clear the sidebar
    const selectProjectContainer = document.querySelector(".project-container");
    selectProjectContainer.innerHTML = "";

    // Re-render the sorted projects using the provided renderProjectItem function
    for (const project of projects) {
      const newProjectItem = renderProjectItem(project); // Pass the project data to the function

      // Set the text color for the project name here
      const selectProjectName = newProjectItem.querySelector(".project-name");
      selectProjectName.style.color = "white"; // This ensures the project name color remains white
    }
  });
}
