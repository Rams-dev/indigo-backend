const { DataTypes } = require('sequelize');

module.exports = (sequelize, type) => {
    return sequelize.define('holidays', {
        idHoliday:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        date: {
            type: DataTypes.DATEONLY,
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
        estatus: {
            type: type.STRING,
            defaultValue: 'A'
        },
    })
}