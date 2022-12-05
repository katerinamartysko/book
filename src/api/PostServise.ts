import axios from 'axios';
import { Client, ClientList } from './types';

interface ResponseClients<T> {
  data: T;
}

export default class PostService {
  static getClients(): Promise<ResponseClients<Array<ClientList>>> {
    return axios.get(`${process.env.REACT_APP_CLIENTS}/clientsList`);
  }

  static getClientId(id: number): Promise<ResponseClients<Client>> {
    return axios.get(`${process.env.REACT_APP_CLIENTS}/clients/${id}`);
  }
}
