const { DataTypes } = require('sequelize')
module.exports = (database) => {
    database.define("user", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            // unique: true
        },
        password:{
            type: DataTypes.STRING,
            // allowNull: false,
        },

       
    });
}