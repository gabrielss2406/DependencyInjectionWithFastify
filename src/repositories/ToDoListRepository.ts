import { IToDoListRepository } from '../models/interfaces/repositories/IToDoListRepository';
import Task from '../models/Task';

export class ToDoListRepository implements IToDoListRepository {
    private tasks: Task[] = [];

    public add(task: Task): Task {
        this.tasks.push(task);
        return task;
    }

    public getTasks(): Task[] {
        return this.tasks;
    }

    public updateTask(index: number, task: Partial<Task>): Task | null {
        if (index < 0 || index >= this.tasks.length) {
            return null;
        }
        this.tasks[index] = { ...this.tasks[index], ...task };
        return this.tasks[index];
    }

    public removeTask(index: number): void {
        if (index >= 0 && index < this.tasks.length) {
            this.tasks.splice(index, 1);
        }
    }
}