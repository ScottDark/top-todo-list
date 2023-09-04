export default function deleteProject(deleteButton) {
  deleteButton.addEventListener("click", function () {
    // Get the parent project item
    const projectItem = this.closest(".project-item");

    if (projectItem) {
      // Remove the project item from the container
      projectItem.remove();

      // Find and remove any associated project-name-x div
      const projectNumber = projectItem.classList[0].split("-")[2];
      const projectNameDiv = document.querySelector(
        `.project-name-${projectNumber}`
      );
      if (projectNameDiv) {
        projectNameDiv.remove();
      }
    }
  });
}
