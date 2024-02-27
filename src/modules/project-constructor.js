import { format } from "date-fns";
import { addProject } from "./project-manager";

function projectConstructor() {
  this.id = Date.now();
  this.name = "Project Name";
  this.priority = "*";
  this.todoList = [];

  const currentDate = new Date();
  const formattedDate = format(currentDate, "MMMM dd, yyyy hh:mm:ss a"); // Include seconds in the format
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

export default projectConstructor;
