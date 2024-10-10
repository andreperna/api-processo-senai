// Importa o módulo fs
import fs from 'fs';

// Define o caminho para o arquivo JSON
const caminhoArquivo = './src/swagger.json';

// Lê o arquivo JSON de forma síncrona
const dados = fs.readFileSync(caminhoArquivo, 'utf-8');

// Converte os dados JSON para um objeto JavaScript
const jsonData = JSON.parse(dados);

export default jsonData