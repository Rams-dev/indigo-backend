const { DataTypes } = require('sequelize');

module.exports = (sequelize, type) => {
    return sequelize.define('tasks', {
        idTask:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        description:{ 
            type: DataTypes.STRING,
            validate: {
                allowNull: true,
                notEmpty: true,
                unique: true,

            }
        },
        dateStart:DataTypes.DATE,
        dateEnd: DataTypes.DATE,
        estatus: {
            type: type.STRING,
            default: 'A'
        },
    })
}