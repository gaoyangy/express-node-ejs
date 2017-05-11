    module.exports = function(sequelize, DataTypes) {
        return sequelize.define('add', {
            user_id: {
                type: DataTypes.STRING,
                allowNull: true,
                unique: true,
                references: {
                    model: "User",
                    key: 'id'
                }
            },
            name: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            age: {
                type: DataTypes.STRING,
                allowNull: true
            },
            height: {
                type: DataTypes.STRING,
                allowNull: true
            },
            weight: {
                type: DataTypes.STRING,
                allowNull: true
            }
        }, {
            freezeTableName: true
        })
    }