import { format } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";

let itemCounter = 0; //Counter to generate unique ID for each item

export default function itemConstructor() {
  this.id = itemCounter++;
  this.name = "To do list item";
  this.priority = "*";

  const currentDate = new Date();
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const zonedDate = utcToZonedTime(currentDate, timeZone);
  const formattedDate = format(zonedDate, "MMMM dd, yyyy HH:mm:ss", {
    timeZone: timeZone,
  }); // Include seconds in the format
  this.dateCreated = formattedDate;
}
