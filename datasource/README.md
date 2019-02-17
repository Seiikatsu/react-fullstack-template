# Datasource

This module provide a seperated datasource by the use of [Sequelize](https://www.npmjs.com/package/sequelize).  
All modules that want to use this module, need to declare there dialects. (mysql2, pg, sqlite3, tedious, pg-hstore).

## Further explanation

### Pre-installed dependencies

This module already got dependencies pre-installed
* [sequelize](https://www.npmjs.com/package/sequelize)
    * ORM used for migrations, seeds and datasource connection
