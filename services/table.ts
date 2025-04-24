import api from "@/lib/axios";
import { IServerStatus } from "@/interfaces/server";

const hosts = [
  'rede.mastercraft.net',
  'mc.hypixel.net'
]

export class TableService {
  async fetchServerStatus(host: string): Promise<IServerStatus> {
    const response = await api.get<IServerStatus>(`${host}`);
    return response.data;
  }

  async fetchAllServers(): Promise<IServerStatus[]> {
    const responses = await Promise.all(
      hosts.map((host) => this.fetchServerStatus(host))
    );
    console.log(responses);
    return responses;
  }
}
