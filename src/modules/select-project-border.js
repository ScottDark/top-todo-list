export default function selectProjectBorder(newProjectElement) {
  // Remove the selected class from all project items
  const projectItems = document.querySelectorAll(".project-item");
  projectItems.forEach((item) => {
    item.classList.remove("selected-project", "border-primary", "rounded");
  });

  // Add the selected class to the clicked project item
  newProjectElement.classList.add(
    "selected-project",
    "border-primary",
    "rounded"
  );
}
