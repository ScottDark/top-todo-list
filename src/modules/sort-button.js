import renderProjectItem from "./render-projects-sidebar";

export default function sortButton(selectSortButton, projects) {
  let isSortedByName = true; // Initially, it's sorted by name

  selectSortButton.textContent = "Sort by: Name"; // Set initial button text

  selectSortButton.addEventListener("click", function () {
    if (isSortedByName) {
      // Sort the projects array by date
      projects.sort(
        (a, b) => new Date(a.dateCreated) - new Date(b.dateCreated)
      );
      selectSortButton.textContent = "Sort by: Date"; // Change button text
    } else {
      // Sort the projects array by name
      projects.sort((a, b) => a.name.localeCompare(b.name));
      selectSortButton.textContent = "Sort by: Name"; // Change button text
    }

    isSortedByName = !isSortedByName; // Toggle the sorting order

    // Clear the sidebar
    const selectProjectContainer = document.querySelector(".project-container");
    selectProjectContainer.innerHTML = "";

    // Re-render the sorted projects using the provided renderProjectItem function
    for (const project of projects) {
      const newProjectItem = renderProjectItem(project); // Pass the project data to the function

      // After re-rendering, change the bullet point color based on priority
      const selectBulletPoint = newProjectItem.querySelector(".bullet-point");

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

      // Set the text color for the project name here
      const selectProjectName = newProjectItem.querySelector(".project-name");
      selectProjectName.style.color = "white"; // This ensures the project name color remains white
    }
  });
}
