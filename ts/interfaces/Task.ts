import { Group } from "./Group";
import { Subject } from "./Subject";
import { User } from "./User";

export interface Task {
  title: string;
  description: string;
  dueDate: Date;
  group: Group;
  subject: Subject;
  lastUser: User;
}
