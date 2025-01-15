import { Task } from './Task.ts';

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

  render(taskListElement: HTMLElement, template: HTMLTemplateElement) {
    const tasklistElement = document.getElementById('tasklist');
    if (tasklistElement) {
      tasklistElement.innerHTML = '';

      this.tasks.forEach((task) => {
        const tasksTemplate = template.content.cloneNode(true) as HTMLElement;

        const titleElement = tasksTemplate.querySelector('.title');
        if (titleElement) {
          titleElement.textContent = task.title;
        }

        tasksTemplate.querySelector('.delete')?.addEventListener('click', () => {
          this.remove(task);
          this.render(taskListElement, template);
        });
        taskListElement.appendChild(tasksTemplate);
      });
    }
  }
}
