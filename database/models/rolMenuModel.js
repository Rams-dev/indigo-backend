module.exports = (sequelize, type) => {
    return sequelize.define('rolMenu', {
        idRolMenu:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idMenu: type.INTEGER,
        idRol: type.INTEGER,
        estatus: type.STRING,
    })
}