import api from "@/lib/axios";
import { IServerStatus } from "@/interfaces/server";

export class TableService {
  static async fetchServer(): Promise<IServerStatus> {
    const response = await api.get<IServerStatus>('rede.mastercraft.net');
    return response.data;
  }
}
