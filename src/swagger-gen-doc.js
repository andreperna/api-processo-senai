import swaggerAutogen from 'swagger-autogen';

// const doc = {
//   info: {
//     title: 'API - Gestão Escolar',
//     description: 'API fake para utilização no Processo Seletivo do SENAI'
//   },
//   host: 'localhost:3000'
// };

const doc = {
  swagger: '2.0',
  info: {
    title: 'API - Gestão Escolar',
    description: 'API fake para utilização no Processo Seletivo do SENAI',
    version: '1.0.0',
  },
  host: 'localhost:3000', // Servidor padrão
  schemes: ['http', 'https'], // Esquema usado (http ou https)
  paths: {}, // As rotas serão adicionadas automaticamente
  // Aqui você pode adicionar as definições de servidores adicionais
  servers: [
    {
      url: 'http://localhost:3000', // Primeiro servidor
      description: 'Servidor local',
    },
    {
      url: 'https://api-processo-senai.onrender.com', // Segundo servidor
      description: 'Servidor de produção',
    },
  ],
};

const outputFile = './swagger.json';
const routes = ['./api.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen()(outputFile, routes, doc);