const { DataTypes } = require('sequelize');

module.exports = (sequelize, type) => {
    return sequelize.define('events', {
        idEvent:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty: true,
            }
            
        },
        description:{ 
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        dateStart:DataTypes.DATE,
        dateEnd: DataTypes.DATE,
        estatus: {
            type: type.STRING,
            defaultValue: 'A'
        },
    })
}