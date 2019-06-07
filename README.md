# React-Fullstack-Template

This project provides a fullstack template with react frontend and express backend.  
The goal of the project is to create a modular fullstack where the modules work independent from each other to swap / exchange them if nessesary.  

## Getting Started

The project was created with yarn, npm is not tested and will might be not work, because [yarn workspaces](https://yarnpkg.com/lang/en/docs/workspaces/) is used.  

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

## Scripts

This project already comes with some preconfigured scripts. Each script is divided into 3 seperate scripts to be able to execute scripts for each module (separate) or combined. For simplicity only the combined scripts will be listed, but each script can have the postfix "-client" or "-server".  
* lint
	* Runs the linter for each module
* test
	* Runs all tests of the modules
* dev
	* Starts both modules in development mode
* start
	* Starts both modules in production mode
* build
	* Build a production-ready version of the project

## Deployment

The project can be build to be production-ready with a single command:
```
yarn build
```
You will find the final build under [build](./build).  

For further details, how the modules and scripts work, see the README of the modules.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
