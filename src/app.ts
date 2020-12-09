import 'reflect-metadata';

import express from 'express';
import path from 'path';

import routes from './routes';

import './database';

const app = express();

app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, 'uploads')));

export default app;
