// api.js
import express from 'express';
import data from './data.js'
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from './swagger.js'
// import cors from 'cors'

// Instanciando API
const api = express();

// Formatando Json de saída
api.set('json spaces', 2)

// Liberando acesso externo
// api.use(cors({
//   origin: '*'
// }))


// Rota para obter todos os alunos
api.get('/alunos', async (req, res) => {
  try {
    res.status(200).json(data.alunos);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao ler os dados dos alunos.' });
  }
});

// Rota para obter todos os professores
api.get('/professores', async (req, res) => {
  try {
    res.json(data.professores);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao ler os dados dos professores.' });
  }
});


// Rota de Documentação
api.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument))


export default api;
