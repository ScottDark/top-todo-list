import itemConstructor from "./item-constructor";

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
