import Fastify, { FastifyInstance } from 'fastify';
import userRouter from './routers/toDoListRouter';
import container from './container';
import { AwilixContainer } from 'awilix';

declare module 'fastify' {
    interface FastifyInstance {
        container: AwilixContainer;
    }
}

const app: FastifyInstance = Fastify({ logger: true });

app.decorate('container', container);

app.register(userRouter);

const start = async () => {
    try {
        await app.listen({ port: 3000 });
        app.log.info(`Server listening on http://localhost:3000`);
    } catch (err) {
        app.log.error(err);
        process.exit(1);
    }
};

start();
