export type status = "todo" | "done";

export type Task = {
  id: string;
  content: string;
  status: status;
  createdAt: string;
};

export type HTTPResponse = {
  code: number;
  message: string;
  data?: any;
}