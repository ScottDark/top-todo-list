import headerManager from "./header-manager.js";

export default function disableNewItemButton() {
  const projectDateCreated = document.querySelector(".project-date-created");
  const button = document.querySelector(".create-new-item-button");

  button.disabled = true;

  const observer = new MutationObserver(function () {
    if (headerManager.isHeaderPopulated) {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
  });

  observer.observe(projectDateCreated, {
    childList: true,
    characterData: true,
    subtree: true,
  });
}
