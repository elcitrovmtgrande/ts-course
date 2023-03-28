import express from 'express';
import { Request, Response, } from 'express';
import TaskController from './controller/TaskController';

const PORT: number = 5555;

const app = express();

app.use(express.json());

app.get('/', (_: Request, res: Response) => {
  res.send('Super API TypeScript !');
});

// CRUD Task
app.get('/tasks', TaskController.getTasks);
app.get('/tasks/:id', TaskController.getTask);
app.post('/tasks', TaskController.addTask);
app.put('/tasks/:id', TaskController.updateTask);
app.delete('/tasks/:id', TaskController.deleteTask);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
