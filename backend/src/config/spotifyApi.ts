// src/config/spotifyApi.ts

import SpotifyWebApi from 'spotify-web-api-node';
import dotenv from 'dotenv';

dotenv.config();

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    // redirectUri: 'http://localhost:3000/callback', // Modifique se necessário
});

// Função para obter o token de autenticação
async function authenticateSpotify() {
    try {
        const data = await spotifyApi.clientCredentialsGrant();
        const accessToken = data.body['access_token'];

        // Configura o token de acesso na instância do SpotifyWebApi
        spotifyApi.setAccessToken(accessToken);
        console.log('Token de acesso Spotify obtido com sucesso!');
    } catch (error) {
        console.error('Erro ao autenticar na API do Spotify:', error);
    }
}

// Executa a autenticação ao iniciar o app
authenticateSpotify();

export default spotifyApi;
