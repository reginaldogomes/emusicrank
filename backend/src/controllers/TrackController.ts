// src/controllers/TrackController.ts

import { Request, Response } from 'express';
import SpotifyService from '../services/SpotifyService';

class TrackController {
    static async getTopTracks(req: Request, res: Response) {
        try {
            const genre = req.params.genre || 'electronic';
            const tracks = await SpotifyService.getTopTracksByGenre(genre);
            res.json(tracks);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

export default TrackController;
