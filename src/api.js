// api.js
import express from 'express';
import data from './data.js'

const api = express();
api.set('json spaces', 2)


// Rota para status
api.get('/status', async(req, res)=>{
    try {
        res.status(200).json({status: "ok"})
    } catch (error) {
        
    }
})

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

export default api;
