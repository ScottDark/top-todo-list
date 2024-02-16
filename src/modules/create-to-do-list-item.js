import itemConstructor from "./item-constructor";
import renderToDoListItems from "./render-to-do-list-items";

export default function createToDoListItem() {
  const selectCreateNewItemButton = document.querySelector(
    ".create-new-item-button"
  );

  selectCreateNewItemButton.addEventListener("click", function () {
    const newItem = new itemConstructor();

    renderToDoListItems(newItem);
  });
}
