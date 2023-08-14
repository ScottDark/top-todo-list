export default function saveEditableContent(contentEditableElement) {
  let userEnteredValue;
  let isEnterKeyPressed = false;

  // Save the project name and remove focus on element.
  contentEditableElement.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      userEnteredValue = contentEditableElement.textContent.trim();
      isEnterKeyPressed = true;
      contentEditableElement.blur();
    }
  });

  contentEditableElement.addEventListener("blur", function () {
    if (isEnterKeyPressed === false) {
      userEnteredValue = contentEditableElement.textContent.trim();
    }
    isEnterKeyPressed = false;
  });
}
