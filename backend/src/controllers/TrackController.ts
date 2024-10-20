import { Request, Response } from 'express';
import SpotifyService from '../services/SpotifyService';

class TrackController {
    static async getTopTracks(req: Request, res: Response) {
        try {
            const genre = req.params.genre || 'electronic';
            const tracks = await SpotifyService.getTopTracksByGenre(genre);
            res.json(tracks);
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
            res.status(500).json({ error: errorMessage });
        }
    }
}

export default TrackController;
