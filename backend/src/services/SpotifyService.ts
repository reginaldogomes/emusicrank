// src/services/SpotifyService.ts

import spotifyApi from '../config/spotifyApi';
import { ISpotifyService } from '../interfaces/ISpotifyService';

class SpotifyService implements ISpotifyService {
    async getTopTracksByGenre(genre: string) {
        // Obtém os dados do Spotify com base no gênero fornecido
        try {
            const response = await spotifyApi.getGenrePlaylists(genre);
            return response.body.playlists.items; // Retorna as músicas
        } catch (error) {
            throw new Error('Erro ao obter músicas: ' + error.message);
        }
    }
}

export default new SpotifyService();
