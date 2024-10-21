// src/services/SpotifyService.ts
import spotifyApi from '../config/spotifyApi';

class SpotifyService {
  // Função para buscar as músicas mais ouvidas de um gênero específico
  static async getTopTracksByGenre(genre: string) {
    try {
      // Verifica se o gênero não está vazio
      if (!genre) {
        throw new Error('O gênero não pode estar vazio.');
      }

      // Realiza a busca por playlists relacionadas ao gênero fornecido
      const response = await spotifyApi.searchPlaylists(genre, { limit: 10 });

      // Verifica se a resposta contém playlists
      const playlists = response.body?.playlists?.items; // Usando encadeamento opcional

      if (!playlists || playlists.length === 0) {
        throw new Error(`Nenhuma playlist encontrada para o gênero: ${genre}`);
      }

      // Seleciona a primeira playlist encontrada
      const topPlaylist = playlists[0];

      // Busca as músicas da playlist selecionada
      const tracksResponse = await spotifyApi.getPlaylistTracks(topPlaylist.id, { limit: 10 });

      // Verifica se a resposta contém músicas
      const tracks = tracksResponse.body?.items; // Usando encadeamento opcional

      if (!tracks || tracks.length === 0) {
        throw new Error(`Nenhuma música encontrada na playlist: ${topPlaylist.name}`);
      }

      // Mapeia os itens da playlist e retorna um array com as informações das músicas
      return tracks.map((item) => ({
        trackName: item.track?.name || 'Desconhecido', // Verifica se o nome da música existe
        artistName: item.track?.artists.map(artist => artist.name).join(', ') || 'Desconhecido', // Verifica se existem artistas
        albumName: item.track?.album?.name || 'Desconhecido', // Verifica se o álbum existe
        popularity: item.track?.popularity || 0, // Define 0 como padrão se a popularidade não estiver disponível
      }));
    } catch (error) {
      // Lança um erro com informações adicionais
      const errorMessage = (error as Error).message || 'Erro desconhecido ao acessar a API do Spotify';
      throw new Error(`Erro ao obter músicas do gênero "${genre}": ${errorMessage}`);
    }
  }

  // Função para buscar gravadoras de música eletrônica por gênero
  static async getRecordLabelsByGenre(genre: string) {
    try {
      // Verifica se o gênero não está vazio
      if (!genre) {
        throw new Error('O gênero não pode estar vazio.');
      }

      // Realiza a busca por artistas relacionados ao gênero fornecido
      const response = await spotifyApi.searchArtists(genre, { limit: 10 });

      // Verifica se a resposta contém artistas
      const artists = response.body?.artists?.items; // Usando encadeamento opcional

      if (!artists || artists.length === 0) {
        throw new Error(`Nenhum artista encontrado para o gênero: ${genre}`);
      }

      // Extrai as gravadoras dos álbuns dos artistas encontrados
      const labels = new Set<string>(); // Usando Set para evitar duplicatas

      for (const artist of artists) {
        // Obtém os álbuns do artista
        const albumsResponse = await spotifyApi.getArtistAlbums(artist.id);
        const albums = albumsResponse.body?.items;

        if (albums && albums.length > 0) {
          for (const album of albums) {
            const albumDetails = await spotifyApi.getAlbum(album.id);
            const recordLabel = albumDetails.body?.label; // A gravadora está nos detalhes do álbum

            if (recordLabel) {
              labels.add(recordLabel); // Adiciona a gravadora ao conjunto
            }
          }
        }
      }

      // Converte o conjunto de gravadoras em um array
      return Array.from(labels);
    } catch (error) {
      const errorMessage = (error as Error).message || 'Erro desconhecido ao acessar a API do Spotify';
      throw new Error(`Erro ao obter gravadoras do gênero "${genre}": ${errorMessage}`);
    }
  }
  
}

export default SpotifyService;
