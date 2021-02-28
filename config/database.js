var Sequelize = require('sequelize');  

var config = require('../config.json');  
var sequelize = new Sequelize(  
  config.dbconfig.database,  
  config.dbconfig.user,  
  config.dbconfig.password, {  
    host:config.dbconfig.host,
    dialect:'mariadb',
      logging: console.log,  
      define: {  
          timestamps: false  
      }  
  }  
);  

module.exports= sequelize ;