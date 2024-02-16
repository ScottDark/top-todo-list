import { format } from "date-fns";
import { addProject } from "./project-manager";

let projectCounter = 0; // Initialize a counter to generate unique IDs

export default function projectConstructor() {
  this.id = projectCounter++; // Assign a unique ID
  this.name = "Project Name";
  this.priority = "*";
  this.todoList = [];

  const currentDate = new Date();
  currentDate.setSeconds(projectCounter); // Add seconds to the date
  const formattedDate = format(currentDate, "MMMM dd, yyyy HH:mm:ss"); // Include seconds in the format
  this.dateCreated = formattedDate;

  projectConstructor.prototype.addTodoItem = function (item) {
    this.todoList.push(item);
  };

  projectConstructor.prototype.removeTodoItem = function (item) {
    const index = this.todoList.indexOf(item);
    if (index > -1) {
      this.todoList.splice(index, 1);
    }
  };
  // Add project to array of projects.
  addProject(this);
}
