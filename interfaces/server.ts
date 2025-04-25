export interface IServerStatus {
  online: boolean;
  host: string;
  port: number;
  ip_adress: string;
  eula_blocked?: boolean;
  retrieved_at: number;
  expires_at: number;
  version?: {
    name_raw: string;
    name_clean: string;
    name_html: string;
    protocol: number;
  };
  players?: {
    online: number;
    max: number;
    list: [
      {
        uuid: string;
        name_raw: string;
        name_clean: string;
        name_html: string;
      }
    ]
  };
  motd?: {
    raw: string;
    clean: string;
    html: string;
  },
  icon: string;
  mods?: [
    {
      name: string;
      version: string
    }
  ];
  software: string;
  plugins?: [
    {
      name: string;
      version: string;
    }
  ];
  srv_record?: {
    host: string;
    port: number;
  }
}