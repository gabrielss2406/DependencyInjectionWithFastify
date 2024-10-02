import { ToDoListRepository } from '../repositories/ToDoListRepository';
import Task from '../models/Task';
import { IToDoListService } from '../models/interfaces/services/IToDoListService';
import { IToDoListRepository } from '../models/interfaces/repositories/IToDoListRepository';

export class ToDoListService implements IToDoListService {
    private toDoListRepository: IToDoListRepository;

    constructor(toDoListRepository: IToDoListRepository) {
        this.toDoListRepository = toDoListRepository;
    }

    public addTask(task: Task): Task {
        return this.toDoListRepository.add(task);
    }

    public getTasks(): Task[] {
        return this.toDoListRepository.getTasks();
    }

    public updateTask(index: number, task: Partial<Task>): Task | null {
        return this.toDoListRepository.updateTask(index, task);
    }

    public removeTask(index: number): void {
        this.toDoListRepository.removeTask(index);
    }
}
