import Task from '../../Task';

export interface IToDoListService {
    addTask(task: Task): Task;
    getTasks(): Task[];
    updateTask(index: number, task: Partial<Task>): Task | null;
    removeTask(index: number): void;
}