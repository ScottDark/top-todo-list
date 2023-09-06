const projects = [];

export function addProject(project) {
  project.id = projects.length;
  projects.push(project);
}

export function getAllProjects() {
  return projects;
}

export function removeProjectById(projectId) {
  const projectIndex = projects.findIndex(
    (project) => project.id === projectId
  );
  if (projectIndex !== -1) {
    projects.splice(projectIndex, 1);
  }
}
