export class Task {
  id: number;
  title: string;
  text: string;
  done: boolean;
  constructor(id: number, title: string, text: string, done: boolean) {
    this.id = id;
    this.title = title;
    this.text = text;
    this.done = done;
  }
}