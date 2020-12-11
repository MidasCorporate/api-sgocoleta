import { Router } from 'express';

import pointRouter from './points.routes';
import itemRouter from './items.routes';
import userRouter from './users.routes';
import sessionsRouter from './sessions.routes';
import cashesRouter from './cashes.routes';
// import pointItemRouter from './pointItem.routes';

const routes = Router();

routes.use('/points', pointRouter);
routes.use('/items', itemRouter);
routes.use('/users', userRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/cashes', cashesRouter);
// routes.use('/point-items', pointItemRouter);

export default routes;
