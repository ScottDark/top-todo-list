import itemConstructor from "./item-constructor";
import renderToDoListItems from "./render-to-do-list-items";

export default function createToDoListItem() {
  const selectCreateNewItemButton = document.querySelector(
    ".create-new-item-button"
  );

  // itemConstructor & renderToDoListItems needs to be created to function
  selectCreateNewItemButton.addEventListener("click", function () {
    const newItem = new itemConstructor();

    renderToDoListItems(newItem);
  });
}
