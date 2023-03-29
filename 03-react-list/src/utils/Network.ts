import axios from 'axios';
import { GetTasksResponse, PostTaskResponse } from '../types';

class Network {
  public async getTasks(): Promise<GetTasksResponse> {
    const response = await axios.get('http://localhost:5555/tasks');
    console.log(response)
    return {
      code: response.data.code,
      message: response.data.message,
      tasks: response.data.data,
    };
  }

  public async postTask(content: string): Promise<PostTaskResponse> {
    const response = await axios.post('http://localhost:5555/tasks', {
      content,
    });
    return {
      code: response.data.code,
      message: response.data.message,
      task: response.data.data,
    };
  }
}

export const API = new Network();
