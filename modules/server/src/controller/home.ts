import { Request, Response } from 'express';
import * as path from 'path';
import * as HttpStatus from 'http-status';
import { logDebug } from '../log/logger';
import { isProductionMode } from 'env-utils';

/**
 * Get home page. Only
 *
 * @param req the request
 * @param res the response
 */
const index = async (req: Request, res: Response) => {
	if (isProductionMode()) {
		const INDEX_PATH = path.join(__dirname, 'public', 'index.html');
		logDebug('index.html path: ', INDEX_PATH);
		res.sendFile(INDEX_PATH);
		return;
	}
	res.status(HttpStatus.NOT_FOUND).send();
};

export default {
	index,
};
