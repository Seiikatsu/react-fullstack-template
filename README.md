# React-Fullstack-Template

This project provides a fullstack template with react frontend and express backend.  
The goal of the project is to create a modular fullstack where the modules work independent from each other.  


## Getting Started

The project was created with yarn, npm is not tested and will might be not work, because we use [yarn workspaces](https://yarnpkg.com/lang/en/docs/workspaces/).  

### Prerequisites

The project requires [yarn](https://yarnpkg.com/en/docs/install) to be installed, as well as some global libraries.  

Global Libraries:  
[Concurrently](https://www.npmjs.com/package/concurrently)  
[Nodemon](https://www.npmjs.com/package/nodemon)

You can install this libraries with the following command:  
```
sudo yarn global add concurrently nodemon
```


### Installing

To getting started with the template, you will need to move into the root directory and run:
```
yarn install
```

## Deployment

The project already has configured scripts to run following scripts:
* Start client and server module in in development and production mode
* Build client and server as production build

For further details, how the modules and scripts work, see the README of the modules.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
