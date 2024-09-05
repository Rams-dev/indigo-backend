module.exports = (sequelize, type) => {
    return sequelize.define('users', {
        idUsuario:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: type.STRING,
        idRol:type.INTEGER,
        user:type.STRING,
        password: type.STRING,
        estatus: type.STRING,
    })
}