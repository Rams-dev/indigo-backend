const Sequelize = require('sequelize')
const userModel = require('./models/usersModel')
const taskModel = require('./models/taskModel')
const menuModel = require('./models/menuModel')
const rolModel = require('./models/rolModel')
const rolMenuModel = require('./models/rolMenuModel')


const sequelize = new Sequelize(
'indigo', 'root', '', {
    host: 'localhost', dialect: 'mysql'
})


sequelize.sync({force:false})
.then(() => {
    console.log("db connect")
})

const users = userModel(sequelize, Sequelize)
const task = taskModel(sequelize, Sequelize)
const menu = menuModel(sequelize, Sequelize)
const roles = rolModel(sequelize, Sequelize)
const rolMenu = rolMenuModel(sequelize, Sequelize)

module.exports = {
    users,
    task,
    menu,
    roles,
    rolMenu
}