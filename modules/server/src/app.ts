import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as express from 'express';
import * as cors from 'cors';
import * as logger from 'morgan';
import * as path from 'path';
import router from './router';
import middleware from './middleware';
import { isProductionMode } from 'env-utils';

const app = express();

app.set('port', process.env.PORT || 8080);

app.use(cors());

// enable json and urlencoded request bodies
app.use(bodyParser.json());

app.use(logger(isProductionMode() ? 'common' : 'dev')); // log all requests

app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

app.use(cookieParser());

if (isProductionMode()) {
	app.use(express.static(path.join(__dirname, 'public')));
}

router.forEach((r) => app.use(r));
middleware.forEach((mw) => app.use(mw));

export default app;
