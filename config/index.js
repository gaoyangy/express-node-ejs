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
// db.add = db.sequelize.import('../schema/add.js');
// db.User.hasOne(db.add);
// db.add.belongsTo(db.User);
// db.sequelize.sync();
module.exports = db;