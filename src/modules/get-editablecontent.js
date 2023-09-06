export default function getEditableContent(project, inputElement) {
  // Update the project name when the input value changes
  inputElement.addEventListener("input", function () {
    project.name = inputElement.value;
  });

  // Handle the Enter key to save the project name
  inputElement.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      project.name = inputElement.value;
      // Optionally, you can call a function to save the project name to your data store here.
    }
  });
}
