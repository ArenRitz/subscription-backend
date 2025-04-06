import express from 'express';

const app = express();

import { PORT } from './config/env.js';

app.get('/', (req, res) => {
    res.send('Welcome to the Subscription Tracker API!');
})


app.listen(3000, () => {
    console.log(`App is running on http://localhost:${PORT}`);
});

export default app;
