// server.js
import http from 'node:http';
import api from './src/api.js';

// Define hostname a porta do servidor
const PORT = process.env.PORT || 3000;
const HOSTNAME = '0.0.0.0'; // Definindo o hostname

// Cria o servidor HTTP e passa o app (json-server) como callback
const server = http.createServer(api);

// Inicia o servidor na porta especificada
server.listen(PORT, () => {
  console.log(`Servidor rodando em http://${HOSTNAME}:${PORT}`);
});
