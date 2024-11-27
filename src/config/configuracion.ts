import { ConnectionConfiguration } from "tedious";

export const configuracion: ConnectionConfiguration = {
  server: process.env.IP_SERVIDOR || "",
  authentication: {
    type: "default",
    options: {
      userName: process.env.USUARIO,
      password: process.env.CLAVE,
    },
  },
  options: {
    port: Number(process.env.PUERTO) || 1433,
    trustServerCertificate: true,
    encrypt: false,
  },
};
