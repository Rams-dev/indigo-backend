const Sequelize = require('sequelize')
const userModel = require('./models/usersModel')
const eventsModel = require('./models/eventsModel')
const menuModel = require('./models/menuModel')
const rolModel = require('./models/rolModel')
const rolMenuModel = require('./models/rolMenuModel')
const holidayModel = require('./models/holidaysModel')
const {userObject, rolesObject} = require("../defaultData")


const sequelize = new Sequelize(
'indigo', 'root', '', {
    host: 'localhost', dialect: 'mysql' 
})

const users = userModel(sequelize, Sequelize)
const event = eventsModel(sequelize, Sequelize)
const menu = menuModel(sequelize, Sequelize)
const roles = rolModel(sequelize, Sequelize)
const rolMenu = rolMenuModel(sequelize, Sequelize)
const holiday = holidayModel(sequelize, Sequelize)

let sequelizeOptions = {force:false}

sequelize.sync(sequelizeOptions)
.then(() => {
    if(sequelizeOptions.force){
        users.create(userObject)
        roles.bulkCreate(rolesObject)
    }
    console.log("db connect")
})






module.exports = {
    users,
    event,
    menu,
    roles,
    rolMenu,
    holiday
}