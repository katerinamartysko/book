import axios from 'axios';
import { Client } from './types';

interface ResponseClients {
  data: Array<Client>;
}

export default class PostService {
  static getClients(): Promise<ResponseClients> {
    return axios.get(`${process.env.REACT_APP_CLIENTS}/clients`);
  }
}
