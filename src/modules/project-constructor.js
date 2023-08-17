import { format } from "date-fns";
import { it } from "date-fns/locale";

export default function projectConstructor(name, priority) {
  this.name = name;
  this.priority = priority;
  this.dateCreated = formattedDate;
  this.todoList = [];

  const currentDate = new Date();
  const formattedDate = format(currentDate, "dd-MM-yyyy");

  projectConstructor.prototype.addTodoItem = function (item) {
    this.todoList.push(item);
  };
}
