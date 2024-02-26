import projectConstructor from "./project-constructor.js";

function loadProjectsFromLocalStorage() {
  try {
    const data = localStorage.getItem("projects");
    if (!data) {
      return [];
    }
    const projectData = JSON.parse(data);
    const projects = projectData.map((projectData) => {
      const project = Object.assign(new projectConstructor(), projectData);

      return project;
    });
    return projects;
  } catch (error) {
    console.error("Error loading projects:", error);
    return [];
  }
}

export default loadProjectsFromLocalStorage;
