import { addObserver, getAllProjects } from "./project-manager";

const saveProjectsToJson = () => {
  const projects = getAllProjects();
  const json = JSON.stringify(projects);
  localStorage.setItem("projects", json);
};

const saveProjectsObserver = {
  update: saveProjectsToJson,
};

addObserver(saveProjectsObserver);

export { saveProjectsToJson };
