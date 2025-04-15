import api from "@/lib/axios";
import { IServerStatus } from "@/interfaces/server";

export class TableService {
  async fetchServer(): Promise<IServerStatus> {
    const response = await api.get<IServerStatus>('rede.mastercraft.net');
    console.log(response.data);
    return response.data;
  }
}
