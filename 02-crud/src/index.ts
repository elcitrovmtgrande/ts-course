import express, { Request, Response } from 'express';
// @ts-ignore
import uuid from 'uuid4';
// @ts-ignore
import cors from 'cors';
import { Task, HTTPResponse } from './types';

const PORT: number = 5555;

const tasks: Task[] = [];

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (_: Request, res: Response) => {
  res.send('Hello Team!');
});

app.get('/tasks', (req: Request, res: Response<HTTPResponse>) => {
  res.json({
    code: 200,
    message: "Voici les taches.",
    data: tasks,
  });
});

app.post('/tasks', (req: Request, res: Response<HTTPResponse>) => {
  const task: Task = req.body;
  tasks.push({
    ...task,
    id: uuid(),
    status: 'todo',
    createdAt: new Date().toJSON(),
  });
  res.json({
    code: 200,
    message: "Tache ajoutee.",
    data: task,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
