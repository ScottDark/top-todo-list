/* Create <p> */
export default function createParagraph(paraText) {
  const createPara = document.createElement("p");
  const newParaNode = document.createTextNode(paraText);

  createPara.appendChild(newParaNode);

  return createPara;
}
