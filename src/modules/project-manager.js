const projects = [];

export function addProject(project) {
  project.id = projects.length;
  projects.push(project);
}

export function getAllProjects() {
  return projects;
}
