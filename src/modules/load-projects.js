function loadProjectsFromLocalStorage() {
  try {
    const data = localStorage.getItem("projects");
    const projects = JSON.parse(data);
    return projects || [];
  } catch (error) {
    console.error("Error loading projects:", error);
    return [];
  }
}

export default loadProjectsFromLocalStorage;
