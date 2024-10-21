import express from 'express';
import bodyParser from 'body-parser';

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
// app.use('/api/tracks', trackRoutes);

export default app;
