import { ConnectionOptions } from 'typeorm';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import { entities } from '../entity';
import { migrations } from '../migration';
import { isDevelopmentMode } from 'env-utils';

declare type ConnectionCache = ConnectionOptions['cache'];
// DatabaseType of typeorm would cover all
declare type ConnectionType = 'mysql' | 'mariadb';

const DEFAULT_DATABASE_TYPE = 'mariadb';
const DEFAULT_DATABASE_CACHE_DURATION = 30000;

const COMMON_CACHE_OPTIONS: ConnectionCache = {
	type: 'redis',
	options: {
		// when using port
		//host: 'localhost',
		//port: 1234,

		// when using socket
		path: '/tmp/redis.sock',
	},
};

const getType = (): ConnectionType => {
	const providedType = process.env.DATABASE_TYPE;

	if (providedType === 'mysql' || providedType === 'mariadb') {
		return providedType;
	}
	return DEFAULT_DATABASE_TYPE;
};

const getCache = (): ConnectionCache => {
	const providedCache = process.env.DATABASE_CACHE;

	if (typeof providedCache === 'boolean') {
		return providedCache;
	}

	if (typeof providedCache === 'number') {
		return {
			duration: providedCache,
			...COMMON_CACHE_OPTIONS,
		};
	}

	return false;

	/*
	if (isDevelopmentMode()) {
		return false;
	}
	return {
		duration: DEFAULT_DATABASE_CACHE_DURATION,
		...COMMON_CACHE_OPTIONS,
	};
	 */
};

const getDatabaseConnection = () => {
	const databaseOptions = {
		host: 'localhost',
		port: 3306,
		database: 'test',
		username: 'test',
		password: 'dev',
	};

	const host = process.env.DB_HOST;
	const port = process.env.DB_PORT;
	const database = process.env.DB_DATABASE;
	const user = process.env.DB_USER;
	const pass = process.env.DB_PASS;

	if (typeof host === 'string') {
		databaseOptions.host = host;
	}
	if (typeof port === 'number') {
		databaseOptions.port = port;
	}

	if (typeof database === 'string') {
		databaseOptions.database = database;
	}

	if (typeof user === 'string') {
		databaseOptions.username = user;
	}

	if (typeof pass === 'string') {
		databaseOptions.password = pass;
	}

	return databaseOptions;
};

// TODO only simplified, try to use ConnectionOptions instead of specific
const getOptions = (): MysqlConnectionOptions => {
	return {
		type: getType(),
		migrationsRun: true,
		migrations: migrations,
		cache: getCache(),
		// synchronize would try to synchronize the database with the models, this could lead to some problems in production mode
		// where we have data, so we only use it in development mode
		synchronize: false, // prevent sync because we run migrations on startup
		entities,
		...getDatabaseConnection(),
		logging: isDevelopmentMode(),
	};
};

export default getOptions;
