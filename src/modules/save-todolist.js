import { getAllProjects } from "./project-manager";

function getSelectedProjectTodoList() {
  const selectedProjectElement = document.querySelector(".selected-project");

  if (!selectedProjectElement) {
    return [];
  }
  const projectId = selectedProjectElement.getAttribute("data-project-index");
  const allProjects = getAllProjects();
  const selectedProject = allProjects[projectId];
  return selectedProject ? selectedProject.todoList : [];
}

const saveTodoListToJson = () => {
  const todoListItems = getSelectedProjectTodoList();
  const storedTodoListItems =
    JSON.parse(localStorage.getItem("todoListItems")) || [];

  const hasChanges =
    todoListItems.some((item, index) => {
      const storedItem = storedTodoListItems[index];
      return (
        !storedItem ||
        storedItem.name !== item.name ||
        storedItem.priority !== item.priority
      );
    }) || todoListItems.length !== storedTodoListItems.length;

  if (hasChanges) {
    const json = JSON.stringify(todoListItems);
    localStorage.setItem("todoListItems", json);
  }
};

export { saveTodoListToJson };
