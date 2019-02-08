import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send('You wont find anything here in development mode!');
});

app.post('/ping', (req, res) => {
    console.log('PING');
    res.send({
        message: 'pong'
    })
});

export default app;
