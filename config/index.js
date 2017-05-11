var Sequelize = require('sequelize');
var config = {
    sequelize: {
        username: 'root',
        password: '123',
        database: 'todo',
        host: "localhost",
        dialect: 'mysql',
        define: {
            underscored: false,
            timestamps: false,
            paranoid: true
        }
    }
};
var db = {
    sequelize: new Sequelize(config.sequelize.database, config.sequelize.username, config.sequelize.password, config.sequelize)
};
db.User = db.sequelize.import('../schema/user.js');
module.exports = db;