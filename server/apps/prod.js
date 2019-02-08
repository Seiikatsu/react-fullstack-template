import express from 'express';
import cors from 'cors';
import path from 'path';

const app = express();
app.use(cors());

const HTML_FILE = path.join(__dirname, 'static', 'index.html');

app.get('/', (req, res) => {
    console.log(`Sending file ${HTML_FILE} to client from dir ${__dirname}`);
    res.sendFile(HTML_FILE);
});

export default app;
