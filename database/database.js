const Sequelize = require('sequelize')
const userModel = require('./models/usersModel')
const taskModel = require('./models/taskModel')

const sequelize = new Sequelize(
'indigo', 'root', '', {
    host: 'localhost', dialect: 'mysql'
})


sequelize.sync({force:false})
.then(() => {
    console.log("db connect")
})

const users = userModel(sequelize, Sequelize)
const taskModel = userModel(sequelize, Sequelize)

module.exports = {
    
}