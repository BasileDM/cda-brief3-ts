import { Task } from "./Task.ts";

export class Todolist {
  tasks: Task[];
  constructor(tasks: Task[]) {
    this.tasks = tasks;
  }

  add(task: Task) {
    this.tasks.push(task);
  }

  remove(task: Task) {
    this.tasks = this.tasks.filter((t) => t.id !== task.id);
  }
}