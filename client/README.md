# Client

This module provide a simple [React](https://github.com/facebook/react) template.

## Getting Started

The build was build on the purpose, that it work independent from the rest of the project.  
It was necessary that only the production build "works" with the other modules.

## Further explanation

### Scripts

This module provide 3 scripts:
* _dev_
    * This script make use of [webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server) to run a local webserver to serve the current build of the module (in development mode)
    * See [webpack config](webpack.config.js) for configuration of the dev-server (key: devServer)
* _build_
    * Create a production build of the module with webpack in mode "production"
* _start_
    * Starts a local dev-server in production mode

### Pre-installed dependencies

This module already got dependencies pre-installed
* [_axios_](https://www.npmjs.com/package/axios)
    * Wrapper for Http requests, used for the Dummy implementation in [app.jsx](src/App.jsx).

### Syntax support

The module supports following "new" syntax:
* ES 6
* Class properties
* React JSX
