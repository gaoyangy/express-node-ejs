var db = {
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

module.exports = db;