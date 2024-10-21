// src/server.ts
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './routes/routes'; // Importa o arquivo de rotas

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Usando as rotas definidas
app.use('/api', router); // Prefixo para todas as rotas

// Rota de verificação
app.get('/', (req, res) => {
  res.send('Bem-vindo ao eMusic Rank API!');
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
