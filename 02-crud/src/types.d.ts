export interface Task {
  id: string;
  content: string;
  status: status;
  createdAt: string;
}

export type status = "todo" | "done";

export interface HTTPResponse {
  status: number;
  message: string;
  data?: any;
}