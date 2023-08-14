/* Create <h1> title */
export default function createTextElement(
  txtMsg,
  elementToCreate,
  ...elementClassArr
) {
  const createNewElement = document.createElement(elementToCreate);
  const textNode = document.createTextNode(txtMsg);

  createNewElement.appendChild(textNode);

  for (const arg of elementClassArr) {
    createNewElement.classList.add(arg);
  }

  return createNewElement;
}
