import axios, { AxiosInstance } from 'axios';

export default class SpotifyApi {
  private static instance: AxiosInstance;

  private constructor() {}

  static getInstance(): AxiosInstance {
    if (!SpotifyApi.instance) {
      SpotifyApi.instance = axios.create({
        baseURL: 'https://api.spotify.com/v1',
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
    return SpotifyApi.instance;
  }
}
