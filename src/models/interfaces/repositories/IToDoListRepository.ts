import Task from "../../Task";

export interface IToDoListRepository {
    add(task: Task): Task;
    getTasks(): Task[];
    updateTask(index: number, task: Partial<Task>): Task | null;
    removeTask(index: number): void;
}