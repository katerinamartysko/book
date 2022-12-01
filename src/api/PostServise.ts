import axios from 'axios';
import { Client } from './types';

interface ResponseClients {
  data: Array<Client>;
}

export default class PostService {
  static getClients(): Promise<ResponseClients> {
    return axios.get('http://localhost:8000/clients');
  }
}
