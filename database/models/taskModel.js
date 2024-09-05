module.exports = (sequelize, type) => {
    return sequelize.define('tasks', {
        idTask:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        description: type.STRING,
        dateStart:type.DATETIME,
        dateEnd: type.DATETIME
    })
}