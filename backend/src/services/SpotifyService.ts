import spotifyApi from '../config/spotifyApi';
import { ISpotifyService } from '../interfaces/ISpotifyService';

class SpotifyService implements ISpotifyService {
    async getTopTracksByGenre(genre: string) {
        // Obtém as playlists relacionadas ao gênero fornecido no Spotify
        try {
            // Pesquisar playlists usando o gênero como termo de busca
            const response = await spotifyApi.searchPlaylists(genre);
            const playlists = response.body.playlists;

            // Verifica se playlists está definido e se contém itens
            if (playlists && playlists.items.length > 0) {
                const playlistId = playlists.items[0].id; // Pegando a primeira playlist como exemplo
                const tracksResponse = await spotifyApi.getPlaylistTracks(playlistId);
                return tracksResponse.body.items; // Retorna as faixas da playlist
            }

            throw new Error('Nenhuma playlist encontrada para o gênero especificado.');
        } catch (error: any) {
            const errorMessage = error?.message || 'Erro desconhecido ao obter músicas.';
            throw new Error(errorMessage);
        }
    }
}

export default new SpotifyService();
