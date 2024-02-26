import { getAllProjects } from "./project-manager";

const saveTodoListToJson = () => {
  const allProjects = getAllProjects();
  allProjects.forEach((project, index) => {
    const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];
    const storedProject = storedProjects[index];

    const hasChanges =
      project.todoList.some((item, index) => {
        const storedItem = storedProject
          ? storedProject.todoList[index]
          : undefined;
        return (
          !storedItem ||
          storedItem.name !== item.name ||
          storedItem.priority !== item.priority
        );
      }) ||
      project.todoList.length !==
        (storedProject ? storedProject.todoList.length : 0);

    if (hasChanges) {
      storedProjects[index] = project;
      const json = JSON.stringify(storedProjects);
      localStorage.setItem("projects", json);
    }
  });
};

export { saveTodoListToJson };
