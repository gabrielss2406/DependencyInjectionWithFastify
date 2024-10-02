import { createContainer, asClass, InjectionMode } from 'awilix';
import { ToDoListRepository } from './repositories/ToDoListRepository';
import { ToDoListService } from './services/ToDoListService';
import { ToDoListController } from './controllers/ToDoListController';

const container = createContainer({
    injectionMode: InjectionMode.CLASSIC
});

container.register({
    toDoListRepository: asClass(ToDoListRepository).classic(),
    toDoListService: asClass(ToDoListService).classic(),
    toDoListController: asClass(ToDoListController).classic(),
});

export default container;