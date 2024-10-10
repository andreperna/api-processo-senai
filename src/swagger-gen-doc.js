import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'API - Gestão Escolar',
    description: 'API fake para utilização no Processo Seletivo do SENAI'
  },
  host: 'api.senaima.com.br'
};

const outputFile = './swagger.json';
const routes = ['./api.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen()(outputFile, routes, doc);