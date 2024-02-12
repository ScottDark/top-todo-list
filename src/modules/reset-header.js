export default function resetHeader() {
  const projectNameInput = document.querySelector(".project-name");
  const projectDateCreated = document.querySelector(".project-date-created");
  const projectPrioLevel = document.querySelector(".project-priority");

  projectNameInput.innerHTML = "";
  projectDateCreated.innerHTML = "Date Created: N/A";
  projectPrioLevel.innerHTML = "Priority: N/A";
}
