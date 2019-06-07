import { Request, Response } from 'express';
import { getCurrentMode } from 'env-utils';

/**
 * Get home page. Only
 *
 * @param req the request
 * @param res the response
 */
const getEnv = async (req: Request, res: Response) => {
	res.send({
		env: getCurrentMode(),
	});
};

export default {
	getEnv,
};
