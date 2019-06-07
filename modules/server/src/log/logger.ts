import * as winston from 'winston';
import { isDevelopmentMode } from 'env-utils';

const { File, Console } = winston.transports;
const { json, colorize, combine, timestamp, printf } = winston.format;

const timestampOptions = {
	format: 'DD.MM.YYYY hh:mm:ss.SSS',
};

const ERROR_LOG_NAME = 'error.log';
const COMBINED_LOG_NAME = 'combined.log';

// prefer the user set LOG_LEVEL, if not preset use debug
// for development mode or into for production mode
const LOG_LEVEL =
	process.env.LOG_LEVEL || isDevelopmentMode() ? 'debug' : 'info';

const logFormat = () =>
	printf(
		(options) => `<${options.timestamp}> [${options.level}]: ${options.message}`
	);

const logger = winston.createLogger({
	level: LOG_LEVEL,
	format: json(),
	defaultMeta: {
		service: 'user-service',
	},
	transports: [
		// - Write all logs error (and below) to `error.log`.
		new File({
			filename: ERROR_LOG_NAME,
			level: 'error',
		}),
		// - Write to all logs with level `info` and below to `combined.log`
		new File({
			filename: COMBINED_LOG_NAME,
		}),
	],
});

const consoleLogger = new Console({
	format: combine(
		colorize({
			all: true,
		}),
		timestamp(timestampOptions),
		logFormat()
	),
});
logger.add(consoleLogger);

const log = (level: string, message: string, meta: Array<any>) => {
	logger.log(level, message, meta && meta.length ? meta : undefined);
};

const logError = (message: string, ...meta: Array<any>) =>
	log('error', message, meta);
const logWarn = (message: string, ...meta: Array<any>) =>
	log('warn', message, meta);
const logInfo = (message: string, ...meta: Array<any>) =>
	log('info', message, meta);
const logVerbose = (message: string, ...meta: Array<any>) =>
	log('verbose', message, meta);
const logDebug = (message: string, ...meta: Array<any>) =>
	log('debug', message, meta);
const logSilly = (message: string, ...meta: Array<any>) =>
	log('silly', message, meta);

export { logError, logWarn, logInfo, logVerbose, logDebug, logSilly };

export default logger;
