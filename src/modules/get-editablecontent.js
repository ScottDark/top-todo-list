import saveDataToLocalStorage from "./save-data-local-storage";

/* Adds event listeners for editablecontent and  Sends saved data to be saved to local storage. */
export default function getEditableContent(typeOfData, contentEditableElement) {
  let userEnteredValue;
  let isEnterKeyPressed = false;

  // Save the project name and remove focus on element.
  contentEditableElement.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      userEnteredValue = contentEditableElement.textContent.trim();
      saveDataToLocalStorage(typeOfData, userEnteredValue); // Not implemented
      isEnterKeyPressed = true;
      contentEditableElement.blur();
    }
  });

  // If the user clicks off the element after editing it saves and loses focus on element.
  contentEditableElement.addEventListener("blur", function () {
    if (isEnterKeyPressed === false) {
      userEnteredValue = contentEditableElement.textContent.trim();
      saveDataToLocalStorage(typeOfData, userEnteredValue); // Not implemented
    }
    isEnterKeyPressed = false;
  });
}
