import express from 'express';
import cors from 'cors';
import path from 'path';

const app = express();
/*
* At this point, we tell express to serve all files that are in the "static" folder of the current path on the route /.
* This means that we dont need to care about the files that are served, all files are in the "static" folder. The index.html
* should care about where the js, styles, ... are located relative to the location of the index.html.
*/
app.use('/', express.static(path.join(__dirname, 'static')));
app.use(cors());

const HTML_FILE = path.join(__dirname, 'static', 'index.html');

/*
* Additionally to the static route config at the top, we configure a GET route on path "/" to always serve the index.html file.
*/
app.get('/', (req, res) => {
    res.sendFile(HTML_FILE);
});

export default app;
