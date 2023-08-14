/* Create <h1> title */
export default function createTextElement(
  txtMsg,
  elementToCreate,
  ...elementClassArr
) {
  const createH1Element = document.createElement(elementToCreate);
  const textNode = document.createTextNode(txtMsg);

  createH1Element.appendChild(textNode);

  for (const arg of elementClassArr) {
    createH1Element.classList.add(arg);
  }

  return createH1Element;
}
