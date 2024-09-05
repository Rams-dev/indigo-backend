module.exports = (sequelize, type) => {
    return sequelize.define('menu', {
        idMenu:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        description: type.STRING,
        estatus: type.STRING,
        
    })
}