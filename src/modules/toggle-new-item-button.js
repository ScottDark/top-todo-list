export default function toggleNewItemButton(buttonToggle) {
  const projectDateCreated = document.querySelector(".project-date-created");
  const button = document.querySelector(".create-new-item-button");

  if (buttonToggle) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}
