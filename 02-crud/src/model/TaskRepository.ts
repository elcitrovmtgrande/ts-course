import { Task } from "../types";

class TaskRepo {
  private tasks: Task[] = [];

  public addTask(task: Task): void {
    this.tasks.push(task);
  }

  public getTasks(): Task[] {
    return this.tasks;
  }

  public getTask(id: string): Task | undefined {
    return this.tasks.find((task) => task.id === id);
  }

  public updateTask(id: string, task: Task): void {
    const index = this.tasks.findIndex((task) => task.id === id);
    this.tasks[index] = task;
  }

  public deleteTask(id: string): void {
    const index = this.tasks.findIndex((task) => task.id === id);
    this.tasks.splice(index, 1);
  }
}

export const TaskRepository = new TaskRepo();

export default TaskRepo;
