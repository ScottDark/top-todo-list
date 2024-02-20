import { saveProjectsToJson } from "./save-projects";

const projects = [];
const observers = [];

const saveProjectsObserver = {
  update: saveProjectsToJson,
};

export function addProject(project) {
  project.id = projects.length;
  projects.push(project);
  notifyObservers();
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
    notifyObservers();
  }
}

export function addObserver(observer) {
  observers.push(observer);
}

export function removeObserver(observer) {
  const observerIndex = observers.indexOf(observer);
  if (observerIndex !== -1) {
    observers.splice(observerIndex, 1);
  }
}

export function notifyObservers() {
  observers.forEach((observer) => {
    if (typeof observer.update === "function") {
      observer.update(projects);
    } else {
      console.error("Observer does not have an update method:", observer);
    }
  });
}

// Observer pattern list
addObserver(saveProjectsObserver);
