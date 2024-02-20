import { getAllProjects } from "./project-manager";

const saveProjectsToJson = () => {
  const projects = getAllProjects();
  const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];

  // Check if any project names have changed
  const hasChanges = projects.some((project, index) => {
    const storedProject = storedProjects[index];
    return !storedProject || storedProject.name !== project.name;
  });

  if (hasChanges) {
    const json = JSON.stringify(projects);
    localStorage.setItem("projects", json);
  }
};

export { saveProjectsToJson };
