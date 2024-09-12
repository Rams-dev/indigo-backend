const { DataTypes } = require("sequelize")

module.exports = (sequelize, type) => {
    return sequelize.define('users', {
        idUsuario:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        apellidoPaterno:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        apellidoMaterno:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        noTelefono:{
            type:DataTypes.STRING,
            allowNull: false,
            unique:true
        },
        fechaNacimiento:{
            type:DataTypes.DATE,
            allowNull: false,
        },
        fechaDeIngresoLaboral:{
            type:DataTypes.DATE,
            allowNull: false,
        },
        password:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        idRol:{
            type:DataTypes.INTEGER,
            allowNull: false,
        },
        estatus: {
            type: type.STRING,
            defaultValue: 'A'
        },
        
    })
}