let itemCounter = 0; //Counter to generate unique ID for each item

export default function itemConstructor() {
  this.id = itemCounter++;
  this.name = "To do list item";
  this.priority = "*";

  const currentDate = new Date();
  currentDate.setSeconds(itemCounter); // Add seconds to the date
  const formattedDate = format(currentDate, "MMMM dd, yyyy HH:mm:ss"); // Include seconds in the format
  this.dateCreated = formattedDate;

  // Add item to current project todolist array. Finish building out todolist item.
}
