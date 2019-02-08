import http from 'http';
import bodyParser from 'body-parser';

// its not possible to use template strings / dynamic imports on the new import/export syntax
const app = require(`../apps/${process.env.NODE_ENV === 'production' ? 'prod.js' : 'dev.js'}`).default;

// enable json and urlencoded request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// create server
const server = http.createServer(app);

// start server
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`);
    console.log('Press Ctrl+C to quit.')
});


