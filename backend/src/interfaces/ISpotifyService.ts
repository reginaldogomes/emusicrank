// src/interfaces/ISpotifyService.ts

export interface ISpotifyService {
    getTopTracksByGenre(genre: string): Promise<any>;
}
