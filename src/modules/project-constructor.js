import { format } from "date-fns";
import { addProject } from "./project-manager";

let projectCounter = 0; // Initialize a counter to generate unique IDs

export default function projectConstructor() {
  this.id = projectCounter++; // Assign a unique ID
  this.name = "Project Name";
  this.priority = "*";
  this.todoList = [];

  const currentDate = new Date();
  const formattedDate = format(currentDate, "MMMM dd, yyyy");
  this.dateCreated = formattedDate;

  projectConstructor.prototype.addTodoItem = function (item) {
    this.todoList.push(item);
  };

  // Add project to array of projects.
  addProject(this);
}
