import { NextFunction, Request, Response } from 'express';
import * as createError from 'http-errors';
import * as httpStatus from 'http-status';
import { logError } from '../log/logger';

type WebError = Error & { status?: number };
// without parameter 'next' we would get call this method at a 404.
// noinspection JSUnusedLocalSymbols
const errorHandler = (
	err: WebError,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	logError('Unexpected web error occurred:', err.message);

	if (res.status) {
		res.status(err.status || httpStatus.INTERNAL_SERVER_ERROR);
	}
	// render the error page
	res.send({
		title: err.name,
		message: err.message,
	});
};

const errorNotFoundHandler = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	next(createError(404));
};

export default [errorHandler, errorNotFoundHandler];
