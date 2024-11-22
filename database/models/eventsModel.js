const { DataTypes } = require('sequelize');

module.exports = (sequelize, type) => {
    return sequelize.define('events', {
        idEvent:{
            type: type.INTEGER,
            primaryKey: true,
            allowNull: true,
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
        dateStart: {
            type: DataTypes.DATE,
            allowNull: true, 
            defaultValue: null,
        },
        dateEnd:{
            type: DataTypes.DATE,
            allowNull: true, 
            defaultValue: null,
        },
        estatus: {
            type: type.STRING,
            defaultValue: 'A'
        },
    })
}