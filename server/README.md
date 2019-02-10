# Server

This module provide a simple [Express](https://expressjs.com/) template.

## Getting Started



## Further explanation

### Scripts

This module provide 3 scripts:
* _dev_
    * This script make use of [nodemon](https://www.npmjs.com/package/nodemon) to watch the module and restart if something has changed
* _build_
    * Creates a production build of this module
    * Build is moved into the project root
    * Production build relies on the client, the client **need** to service its files into the same directory under the subfolder "static" and provide a *index.html* file.
    * the production build include everything that is in the "static" subfolder and service the files to "/"
* _start_
    * Run a [webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server) in production mode

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
* [datasource](../datasource)
    * workspace module "datasource"

### Syntax support

The module supports following "new" syntax:
* ES 6
