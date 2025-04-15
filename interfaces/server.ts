export interface IServerStatus {
  online: boolean;
  ip: string;
  port: number;
  hostname: string;
  version: string;
  motd: {
    raw: [string];
    clean: [string];
    html: [string];
  }
  players: {
    online: number;
    max: number;
    list?: [
      {
        name: string;
        uuid: string;
      }
    ]
  },
  info?: {
    raw: [string];
    clean: [string];
    html: [string];
  }
}