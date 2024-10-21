// src/routes.ts
import express from 'express';
import SpotifyService from '../services/SpotifyService';

const router = express.Router();

// Função para tratar o erro de forma segura
const getErrorMessage = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message; // Se for uma instância de Error, retorna a mensagem
  }
  return 'Erro desconhecido'; // Retorna uma mensagem padrão se não for um Error
};

// Rota para listar as músicas mais ouvidas de um gênero específico
router.get('/top-tracks/:genre', async (req, res) => {
  const genre = req.params.genre;

  try {
    const topTracks = await SpotifyService.getTopTracksByGenre(genre);
    res.json(topTracks);
  } catch (error) {
    res.status(500).json({ error: getErrorMessage(error) });
  }
});

// Rota para listar gravadoras de música eletrônica por gênero
router.get('/record-labels/:genre', async (req, res) => {
  const genre = req.params.genre;

  try {
    const labels = await SpotifyService.getRecordLabelsByGenre(genre);
    res.json(labels);
  } catch (error) {
    res.status(500).json({ error: getErrorMessage(error) });
  }
});

export default router;
