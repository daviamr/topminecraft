import api from "@/lib/axios";
import { IServerStatus } from "@/interfaces/server";

const hosts = [
  'rede.mastercraft.net',
  'mc.hypixel.net',
  'sm.opblocks.com',
  'sm.vortexnetwork.net',
  'sm.insanitycraft.net',
  'smc.lemoncloud.net',
  'smc.purpleprison.net',
  'mc.bosscraft.net',
  'smc.fadecloud.com',
  'play.freshsmp.fun'
];

export class TableService {
  async fetchServerStatus(host: string): Promise<IServerStatus> {
    const response = await api.get<IServerStatus>(`/status/java/${host}`);
    return response.data;
  }

  async fetchAllServers(): Promise<IServerStatus[]> {
    const responses = await Promise.all(
      hosts.map((host) => this.fetchServerStatus(host))
    );
    return responses;
  }
}
