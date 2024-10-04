import { FastifyInstance, FastifyPluginCallback } from 'fastify';
import { ToDoListController } from '../controllers/ToDoListController';

const userRouter: FastifyPluginCallback = (app: FastifyInstance, options, done) => {
    const container = app.container;
    const toDoListController = container.resolve<ToDoListController>('toDoListController');

    app.get('/todo', async (request, reply) => {
        try {
            const tasks = await toDoListController.getTasks(request, reply);
            reply.send({ tasks });
        } catch (error) {
            reply.code(500).send({ message: 'Erro ao obter tarefas' });
        }
    });

    app.post('/todo', async (request, reply) => {
        try {
            const newTask = await toDoListController.addTask(request, reply);
            reply.code(201).send({ task: newTask });
        } catch (error) {
            reply.code(400).send({ message: 'Erro ao adicionar tarefa' });
        }
    });

    done();
};

export default userRouter;