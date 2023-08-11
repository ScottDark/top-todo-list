/* Create <h1> title */
export default function createTitle(txtMsg) {
  const selectContentWrapper = document.querySelector("#content");

  const createH1Element = document.createElement("h1");
  const textNode = document.createTextNode(txtMsg);

  createH1Element.appendChild(textNode);

  return createH1Element;
}
