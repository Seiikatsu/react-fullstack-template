import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

/*
* In development, we dont care about the GET route "/", we only provide routes that we need for our api to the client.
*/
app.get('/', (req, res) => {
    res.send('You wont find anything here in development mode!');
});

/*
* Dummy POST route that could be removed later and is only used for testing.
*/
app.post('/ping', (req, res) => {
    console.log('PING');
    res.send({
        message: 'pong'
    })
});

export default app;
