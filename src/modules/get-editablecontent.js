import { notifyObservers } from "./project-manager";
export default function getEditableContent(project, inputElement) {
  // Handle the Enter key to save the project name
  inputElement.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      project.name = inputElement.value;
      notifyObservers();
    }
  });
}
