import { group } from "./group_interface";
import { subject } from "./subject_interface";
import { user } from "./user_interface";

export interface task {
    title: string,
    description: string,
    dueDate: Date,
    group: group
    subject: subject,
    lastUser: user
}