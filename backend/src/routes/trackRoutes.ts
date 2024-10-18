import express from 'express';
import TrackController from '../controllers/TrackController';

const router = express.Router();

router.get('/:genre', TrackController.getTopTracks);

export default router;
