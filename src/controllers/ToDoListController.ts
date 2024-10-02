import { FastifyReply, FastifyRequest } from 'fastify';
import Task from '../models/Task';
import { IToDoListService } from '../models/interfaces/services/IToDoListService';

export class ToDoListController {
    private toDoListService: IToDoListService;

    constructor(toDoListService: IToDoListService) {
        this.toDoListService = toDoListService;
    }

    async addTask(request: FastifyRequest, reply: FastifyReply) {
        const taskData = request.body as Task;
        const newTask = await this.toDoListService.addTask(taskData);
        reply.code(201).send(newTask);
    }

    async getTasks(request: FastifyRequest, reply: FastifyReply) {
        const tasks = await this.toDoListService.getTasks();
        reply.send(tasks);
    }

    async updateTask(request: FastifyRequest, reply: FastifyReply) {
        const { index } = request.params as { index: number };
        const taskData = request.body as Partial<Task>;
        const updatedTask = await this.toDoListService.updateTask(index, taskData);
        if (!updatedTask) {
            return reply.code(404).send({ message: 'Task not found' });
        }
        reply.send(updatedTask);
    }

    async removeTask(request: FastifyRequest, reply: FastifyReply) {
        const { index } = request.params as { index: number };
        this.toDoListService.removeTask(index);
        reply.code(204).send();
    }
}
