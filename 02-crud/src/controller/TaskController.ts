import { Request, Response, } from "express";
import { HTTPResponse } from "../types";
import { TaskRepository } from "../model/TaskRepository";

class TaskController {
  static getTasks(_: Request, res: Response<HTTPResponse>) {
    const tasks = TaskRepository.getTasks();
    res.json({
      status: 200,
      message: "OK",
      data: tasks,
    });
  }

  static getTask(req: Request, res: Response<HTTPResponse>) {
    const id = req.params.id;
    const task = TaskRepository.getTask(id);
    if (task) {
      res.json({
        status: 200,
        message: "OK",
        data: task,
      });
    } else {
      res.json({
        status: 404,
        message: "Not Found",
      });
    }
  }

  static addTask(req: Request, res: Response<HTTPResponse>) {
    const task = req.body;
    TaskRepository.addTask(task);
    res.json({
      status: 201,
      message: "Created",
    });
  }

  static updateTask(req: Request, res: Response<HTTPResponse>) {
    const id = req.params.id;
    const task = req.body;
    TaskRepository.updateTask(id, task);
    res.json({
      status: 200,
      message: "OK",
    });
  }

  static deleteTask(req: Request, res: Response<HTTPResponse>) {
    const id = req.params.id;
    TaskRepository.deleteTask(id);
    res.json({
      status: 200,
      message: "OK",
    });
  }
}

export default TaskController;
