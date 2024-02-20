import HeaderManager from "./header-manager";
import selectProjectBorder from "./select-project-border";

export default function populateHeaderListener(
  newProjectElement,
  latestProject
) {
  const headerManager = new HeaderManager();

  newProjectElement.addEventListener("click", () => {
    headerManager.populateHeaderWithProjectDetails(latestProject);

    selectProjectBorder(newProjectElement);

    newProjectElement.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        headerManager.populateHeaderWithProjectDetails(latestProject);
      }
    });
  });
}
