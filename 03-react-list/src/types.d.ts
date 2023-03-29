export type status = "todo" | "done";

export type Task = {
  id: string;
  content: string;
  status: status;
  createdAt: string;
};

export type HTTPRequest = {
  code: number;
  message: string;
}

export type GetTasksResponse = HTTPRequest & {
  tasks: Task[];
}

export type PostTaskResponse = HTTPRequest & {
  task: Task;
}