import 'reflect-metadata';
import { Connection, createConnection } from 'typeorm';
import Entities from './entity';
import getOptions from './util/options';
import { logDebug } from '../log/logger';

let connection: Connection;
const getConnection = async () => {
	logDebug('Getting sql connection');
	if (!connection) {
		logDebug('No connection, create connection');
		connection = await createConnection(getOptions());
	}
	return connection;
};

export { Entities };

export default getConnection;
