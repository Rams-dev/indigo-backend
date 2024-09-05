module.exports = (sequelize, type) => {
    return sequelize.define('roles', {
        idRol:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        description: type.STRING,
        estatus: type.STRING,
    })
}