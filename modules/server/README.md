# Server

This module provide a simple backend template powered by [Express](https://expressjs.com/).

## Getting Started

### Database

The module uses [Typeorm](https://github.com/typeorm/typeorm) to provide a persistent layer with different backends. At the moment the following backends are supported:  
* [MySQL / MariaDB](https://www.npmjs.com/package/mysql2)
* [PostgreSQL](https://www.npmjs.com/package/pg)
* [SQLite](https://www.npmjs.com/package/sqlite3)
* [MsSQL](https://www.npmjs.com/package/tedious)

All those dependencies are installed by default, if you know that u want to use a specific backend you can safely remove the other backend dependencies.  

#### Connecting to database

In order to connect to a database you will need to provide the parameters through the node env. There are 5 properties that are required to set:  
* DB_HOST (Specify the host where the database server is running on e.g. localhost)
* DB_PORT (Specify the port which the database server uses)
* DB_DATABASE (Specify the database to use for the application)
* DB_USER (Specify the username that is used to access the database)
* DB_PASS (Specify the password that is used to access the database)

While using the development mode you can also edit the [ormconfig.json](./ormconfig.json) and specify the database connection.

#### Database migration

The migration of the database is done automatically,  while in development mode the "synchronize" flag of typeorm is used. This will erase all data at startup and run all migrations.  
In production mode all migrations will be included in the build (this means, if you create a migration you will need to add it to the [index.ts](./src/database/migration/index.ts) to include it into the build). On startup of the application, typeorm will search for new migrations automatically and run them.

### Lint

For linting this module uses [eslint](https://www.npmjs.com/package/eslint). The project uses the existing configuration file [.eslintrc.js](../../.eslintrc.js) to have a simular linting as the whole project. However its still possible to overwrite some rules oder disable them only for this module. To do so, you will need to edit [.eslintrc.js](./.eslintrc.js) or [.eslintignore](./.eslintignore). By default, the [test](./test) folder is ignored.

### Testing

For testing this module uses [jest](https://www.npmjs.com/package/jest). To be able to write tests in typescript the dependency [ts-jest](https://www.npmjs.com/package/ts-jest) is used and configured by default at the [jest.config.js](./jest.config.js).  
To be able to test not only internal logik [supertest](https://www.npmjs.com/package/supertest) is used. Supertest provides a high level abstraction for testing http request.

## Scripts

This module provide 5 scripts:
* _dev_
    * This script starts a [nodemon](https://www.npmjs.com/package/nodemon) process that watch restart if anything in the [src](./src) directory has changed
* _build_
    * Creates a production ready build of this module
    * Production build does not include any frontend, the root page (/) of this module will serve a static index.html. To include a frontend, you will need to create a folder called *static* and create a index.html inside this folder
* _start_
    * Starts a [webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server) to develop in production mode
* _lint_
    * Run [eslint](https://eslint.org/) over all .ts files of the module
* _test_
    * Run [jest](https://jestjs.io/docs/en/getting-started) to execute all tests

### Pre-installed dependencies

This module already got dependencies pre-installed
* [express](https://www.npmjs.com/package/express)
    * used web framework
* [body-parser](https://www.npmjs.com/package/body-parser)
    * Used to parse incomming request bodies 
* [cookie-parser](https://www.npmjs.com/package/cookie-parser)
    * Used to parse incomming cookies on requests
* [cors](https://www.npmjs.com/package/cors)
    * Enable CORS requests
* [morgan](https://www.npmjs.com/package/morgan)
    * Middleware for express to log incomming requests
* [http-status](https://www.npmjs.com/package/http-status)
    * Provide http status codes and messages
* [http-errors](https://www.npmjs.com/package/http-errors)
    * Used to easily create http error codes for express
* [reflect-metadata](https://www.npmjs.com/package/reflect-metadata)
    * needed for typeorm to work with its model definitions
* [typeorm](https://www.npmjs.com/package/typeorm)
    * used as orm framework
* [mysql2](https://www.npmjs.com/package/mysql2)
    * MySQL client
* [winston](https://www.npmjs.com/package/winston)
    * used as logging framework


### Syntax support

The module supports following "new" syntax:
* ES 6
* ES 7
