import { Request, Response } from 'express';
import axios from 'axios';

const getAddress = async (req: Request, res: Response): Promise<Response | void> => {
  const URL = 'https://jsonplaceholder.typicode.com/todos/1';
  const response = await axios.get(URL);

  return res.json(response.data);
};

export default {
  getAddress,
};
