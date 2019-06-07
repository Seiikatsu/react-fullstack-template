import { logDebug, logError, logInfo } from './log/logger';
import getConnection from './database';
import { Express } from 'express';

class Server {
	private readonly app: Express;
	private readonly port: string;

	constructor(app: Express) {
		this.app = app;
		this.port = app.get('port');
	}

	run(): void {
		Promise.resolve()
			.then(() => logInfo('Checking and applying migrations..'))
			.then(this.runMigrations)
			.then(this.runServer)
			.catch((error) => logError(error));
	}

	private runMigrations = async (): Promise<void> => {
		return getConnection() //
			.then(() => logInfo('Migrations applied, starting server'));
	};

	private runServer = async (): Promise<void> => {
		const { app, port } = this;
		const server = app.listen(port, this.onListening);
		server.on('error', this.onError);
	};

	private onListening = (): void => {
		logDebug(`Server is up and running on port ${this.port}`);
	};

	private onError = (error: any): void => {
		if (error.syscall !== 'listen') {
			throw error;
		}

		// handle specific listen errors with friendly messages
		switch (error.code) {
			case 'EACCES':
				logError(`Port ${this.port} requires elevated privileges`);
				process.exit(1);
				break;
			case 'EADDRINUSE':
				logError(`Port ${this.port} is already in use`);
				process.exit(1);
				break;
			default:
				throw error;
		}
	};
}

export default Server;
