import { Task } from "./classes/Task";
import { Todolist } from "./classes/Todolist";

window.onload = () => {
  const todoList = new Todolist([]);
  const tasklistElement = document.getElementById("tasklist") as HTMLElement;
  const taskTemplateElement = document.getElementById("task-template") as HTMLTemplateElement;
  const addTaskButtonElement = document.getElementById("add-task");

  addTaskButtonElement?.addEventListener("click", () => {
    const title = prompt("Enter task title");
    if (title) {
      const task = new Task(todoList.tasks.length + 1, title);
      todoList.add(task);
      todoList.render(tasklistElement, taskTemplateElement);
    }
  });
};
