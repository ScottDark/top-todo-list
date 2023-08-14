/* Create <h1> title */
export default function createTextElement(txtMsg, elementToCreate) {
  const createH1Element = document.createElement(elementToCreate);
  const textNode = document.createTextNode(txtMsg);

  createH1Element.appendChild(textNode);

  return createH1Element;
}
